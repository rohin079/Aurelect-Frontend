import React from "react";
import { Shield } from "lucide-react";
import Footer from "@/components/footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Header Section */}
        <div className="bg-slate-900 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-sky-400" />
              <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
            </div>
            <p className="text-slate-300 max-w-3xl">
              At Aurelect Advisors, we are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-10 space-y-8">
            {/* Section 1: Who We Are */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Who We Are</h2>
              <p className="text-slate-600 leading-relaxed">
                This Privacy Policy pertains to the website www.aurelect.com, which is wholly owned and administered by Aurelect Advisors Private Limited. We are committed to respecting your right to privacy and protecting any personal information you share with us. This policy discloses our information collection and usage practices.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                When you visit our website, you can feel completely secure, as we are dedicated to safeguarding the privacy of our visitors. Please read the following information before you use or submit personal data on this website.
              </p>
            </section>

            {/* Section 2: How Information is Gathered */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. How Information is Gathered</h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>
                  <span className="font-semibold">Contact Us Forms:</span> Information is gathered directly when you voluntarily provide details through our contact us form.
                </li>
                <li>
                  <span className="font-semibold">Cookies:</span> We collect information from cookies, which provide details about how you entered our site, what information you viewed, and how you navigated through our site. This information will not be reviewed at an individual level. You can disable cookies or opt out at the request or download page if you do not want your information to be used.
                </li>
                <li>
                  <span className="font-semibold">Internet Access Logs:</span> We also collect information indirectly through our site's internet access logs. When you browse our site, your internet address is automatically collected and placed in our internet access logs.
                </li>
              </ul>
            </section>

            {/* Section 3: How Information is Used */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. How Information is Used</h2>
              <p className="text-slate-600 leading-relaxed">
                The information we collect on our website is analyzed to help us understand what is most effective and improve the site's usability for visitors. At times, the information may also be used to send direct emails or newsletters to inform you about new services, events, and conferences.
              </p>
            </section>

            {/* Section 4: Information Will Not Be Shared with Outside Parties */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Information Will Not Be Shared with Outside Parties</h2>
              <p className="text-slate-600 leading-relaxed">
                At Aurelect Advisors, we share individual information only with our trusted employees and partners. At no time will individual information be shared with or sold to outside parties. This website may contain links to other sites, and Aurelect Advisors is not responsible for the content or privacy practices of such websites.
              </p>
            </section>

            {/* Section 5: Your Data Will Be Kept Secure */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Your Data Will Be Kept Secure</h2>
              <p className="text-slate-600 leading-relaxed">
                We have implemented security measures to protect the misuse, loss, and alteration of information. Our data is kept secure behind a firewall, with limited access granted only to authorized personnel.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                To prevent unauthorized access or disclosure of information, maintain data accuracy, and ensure proper use, we employ the best administrative, technical, and physical procedures, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-3">
                <li>All information will be obtained only with your consent and processed lawfully.</li>
                <li>Personal data will be collected only if necessary or connected to an activity of Aurelect Advisors.</li>
                <li>All information will be kept secure against unlawful processing, damage, loss, destruction, or unauthorized access.</li>
              </ul>
            </section>

            {/* Section 6: You Can Access Your Information at Any Time */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. You Can Access Your Information at Any Time</h2>
              <p className="text-slate-600 leading-relaxed">
                You have the right to access the information you have given us. If you need the information corrected or if it is inaccurate, you can contact us at info@aurelect.com.
              </p>
            </section>

            {/* Section 7: Updates to This Policy */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Updates to This Policy</h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
              </p>
            </section>

            {/* Section 8: Contact Us */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                For any questions or concerns regarding this Privacy Policy, please contact us at <a href="mailto:info@aurelect.com" className="text-sky-600 hover:text-sky-700 transition-colors duration-300">info@aurelect.com</a>.
              </p>
            </section>

            {/* Last Updated */}
            <div className="pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-500">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;