import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
