// app/actions/sendEmail.ts
'use server'

import nodemailer from 'nodemailer'

interface EmailData {
  from_name: string
  from_email: string
  message: string
  selected_services: string
}

export async function sendEmail(data: EmailData) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  try {
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: 'info@aurelect.com',
      subject: `${data.from_name} has submitted a contact form`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${data.from_name}</p>
        <p><strong>Email:</strong> ${data.from_email}</p>
        <p><strong>Selected Services:</strong> ${data.selected_services}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error: 'Failed to send email' }
  }
} 