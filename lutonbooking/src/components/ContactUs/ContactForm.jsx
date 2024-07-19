import React, { useState } from "react";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let tempError = {};
    if (formValues.name === "") {
      tempError.name = "This field is required";
    }
    if (formValues.email === "") {
      tempError.email = "This field is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      tempError.email = "Email is not valid";
    }
    if (formValues.message === "") {
      tempError.message = "This field is required";
    }

    setErrors(tempError);
    return Object.keys(tempError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted", formValues);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
