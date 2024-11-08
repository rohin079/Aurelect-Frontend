"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Whatsapp = () => {
  return (
    <motion.a
      href="https://wa.me/15551234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-12 right-12 bg-green-500 text-white rounded-full shadow-lg transition-colors"
      aria-label="Contact us on WhatsApp"
      whileHover={{
        scale: 1.1,
        rotate: 10,
        backgroundColor: "#25D366", // Lighter green color on hover
      }}
      whileTap={{ scale: 0.95 }} // Slight scale down on click
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/images/whatsapp.png"
          alt="whatsappicon"
          height="50"
          width="50"
        />
      </motion.div>
    </motion.a>
  );
};

export default Whatsapp;
