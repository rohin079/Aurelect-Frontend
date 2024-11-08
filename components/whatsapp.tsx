import React from "react";
import Image from "next/image";

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/15551234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-12 right-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Contact us on WhatsApp"
    >
      <Image
        src="/images/whatsapp.png"
        alt="whatsappicon"
        height="50"
        width="50"
      />
    </a>
  );
};

export default Whatsapp;
