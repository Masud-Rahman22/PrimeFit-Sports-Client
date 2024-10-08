import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<null | string>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setStatus("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 py-16 px-4 my-16">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
        {/* Left Side - Contact Information */}
        <div className="w-full md:w-1/2 p-8 bg-blue-100 rounded-lg">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-4">
            Have questions about PrimeFit? We're here to help! Reach out to us via the form on the right or contact us directly.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mt-6">Contact Information</h3>
          <p className="text-lg text-gray-600 mt-2">📍 Address: Ali Ahmed Chunka Shorok Narayanganj, Dhaka, Bangladesh</p>
          <p className="text-lg text-gray-600 mt-2">📞 Phone: +880 185 055 6560</p>
          <p className="text-lg text-gray-600 mt-2">✉️ Email: info@primefit.com</p>
        </div>
        
        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
          <p className="text-center text-gray-600 mb-4">
            We’d love to hear from you! Please fill out the form below and we’ll get back to you shortly.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6 flex flex-col">
            <div className="flex flex-col w-full">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                placeholder="Your Email"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                rows={5}
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-center text-green-600">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
