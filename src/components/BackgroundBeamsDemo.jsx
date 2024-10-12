"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function BackgroundBeamsDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation
    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        // Here you can send data to your server
        const response = await fetch("http://localhost:5000/submit-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSuccessMessage("Your message has been sent successfully!");
          // Reset form fields
          setFormData({ name: "", email: "", message: "" });
          setErrors({});
        } else {
          // Handle server errors
          setSuccessMessage("There was an error sending your message. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        setSuccessMessage("There was an error sending your message. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-[80vh] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 relative z-20">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold mt-32 mb-6">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-4 text-sm text-center relative z-10">
          We would love to hear from you! Please fill out the form below to provide your feedback or get in touch with us.
        </p>

        {/* Feedback Form */}
        <form className="relative z-10 my-4" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="text-white">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full mt-2 
                ${errors.name ? 'bg-red-100' : 'bg-white'} placeholder:text-neutral-700`}
              required
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-white">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="hi@manuarora.in"
              className={`rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full mt-2 
                ${errors.email ? 'bg-red-100' : 'bg-white'} placeholder:text-neutral-700`}
              required
            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="text-white">Your Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              className={`rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full mt-2 
                ${errors.message ? 'bg-red-100' : 'bg-white'} placeholder:text-neutral-700 z-20`}
              required
            ></textarea>
            {errors.message && <span className="text-red-500">{errors.message}</span>}
          </div>

          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Submit
          </button>
        </form>

        {/* Success/Error Message */}
        {successMessage && (
          <div className="text-green-500 text-center mt-4">{successMessage}</div>
        )}

        {/* Contact Information Section */}
        <div className="text-neutral-500 max-w-lg mx-auto my-6 text-sm text-center relative z-10">
          <h2 className="text-lg font-bold text-white">Contact Information</h2>
          <p>Address: 1234 Shikshan Jagruti Abhiyaan Road, Bharuch, Gujarat</p>
          <p>Phone: +91 9876543210</p>
          <p>Email: info@shikshanjagruti.org</p>
          <p>Instagram: <a href="https://instagram.com/shikshanjagruti" className="text-teal-500 hover:underline">shikshanjagruti</a></p>
          <p>Facebook: <a href="https://facebook.com/shikshanjagruti" className="text-teal-500 hover:underline">shikshanjagruti</a></p>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
