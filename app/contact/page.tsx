"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://college-minor-production.up.railway.app/contact", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      if (response.status === 200) {
        setStatusMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        toast.success("Message sent successfully!");
      }

    } catch (error) {
      setStatusMessage("Error sending message. Please try again.");
      toast.error("Error sending message. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-200 mb-6">
          Get in Touch
        </h1>
        
        {/* Description */}
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-8">
          We would love to hear from you! Please fill out the form below to reach us.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 transition duration-200"
              placeholder="Your Name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 transition duration-200"
              placeholder="Your Email"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 transition duration-200"
              placeholder="Your Message"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-teal-500 dark:hover:bg-teal-600 transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {statusMessage && (
          <div className="mt-4 text-center text-gray-800 dark:text-gray-200">
            <p>{statusMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
