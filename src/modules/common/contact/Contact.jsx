import React, { useState } from 'react';
import Navbar from "../navbar/Navbar.jsx";
import "../home/home.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        error: false,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus({
                submitted: false,
                error: true,
                message: 'Please fill out all required fields.'
            });
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFormStatus({
                submitted: false,
                error: true,
                message: 'Please enter a valid email address.'
            });
            return;
        }

        // Simulating form submission
        // Replace this with actual API call to your backend
        setTimeout(() => {
            setFormStatus({
                submitted: true,
                error: false,
                message: 'Thank you! Your message has been sent successfully.'
            });

            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setFormStatus({
                    submitted: false,
                    error: false,
                    message: ''
                });
            }, 5000);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="main-content py-16">
                {/* Hero Section */}
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold mb-6 text-gray-800">Contact Us</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We'd love to hear from you! Reach out to our team with any questions, inquiries, or feedback.
                        </p>
                    </div>
                </div>

                {/* Contact Information and Form Section */}
                <div className="max-w-6xl mx-auto px-4 mb-20">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="flex flex-col lg:flex-row">
                            {/* Contact Information */}
                            <div className="lg:w-1/3 bg-indigo-700 text-white p-8 lg:p-12">
                                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                                    <p className="text-indigo-100">
                                        123 Business Avenue<br />
                                        Suite 500<br />
                                        San Francisco, CA 94107
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                                    <p className="text-indigo-100">
                                        +1 (555) 123-4567<br />
                                        Mon-Fri, 9am-5pm PST
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                                    <p className="text-indigo-100">
                                        info@yourcompany.com<br />
                                        support@yourcompany.com
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                                    <div className="flex space-x-4">
                                        {/* Social Media Icons */}
                                        <a href="#" className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center hover:bg-indigo-500 transition duration-300">
                                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                                            </svg>
                                        </a>
                                        <a href="#" className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center hover:bg-indigo-500 transition duration-300">
                                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                            </svg>
                                        </a>
                                        <a href="#" className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center hover:bg-indigo-500 transition duration-300">
                                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"></path>
                                            </svg>
                                        </a>
                                        <a href="#" className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center hover:bg-indigo-500 transition duration-300">
                                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="lg:w-2/3 p-8 lg:p-12">
                                <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>

                                {formStatus.message && (
                                    <div className={`mb-6 p-4 rounded-md ${formStatus.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                                        {formStatus.message}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                Your Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Your Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Your Message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Write your message here..."
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-indigo-600 text-white font-medium py-3 px-6 rounded-md hover:bg-indigo-700 transition duration-300"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Google Map Section */}
                <div className="max-w-6xl mx-auto px-4 mb-20">
                    <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
                        {/* This would typically be your Google Map embed */}
                        <div className="w-full h-full flex items-center justify-center bg-gray-300">
                            <p className="text-gray-600 font-medium">Map Goes Here</p>
                            {/* Replace with actual map implementation:
                                <iframe
                                    src="https://www.google.com/maps/embed?..."
                                    width="100%"
                                    height="100%"
                                    style={{border:0}}
                                    allowFullScreen=""
                                    loading="lazy">
                                </iframe>
                            */}
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-gray-100 py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Frequently Asked Questions</h2>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-bold mb-2 text-gray-800">How quickly can I expect a response?</h3>
                                <p className="text-gray-600">
                                    Our team typically responds to all inquiries within 24-48 business hours. For urgent matters, please call our office directly.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-bold mb-2 text-gray-800">Do you offer consultations for new clients?</h3>
                                <p className="text-gray-600">
                                    Yes, we offer a complimentary 30-minute consultation for potential clients to discuss their needs and how we can help.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-bold mb-2 text-gray-800">What information should I include in my message?</h3>
                                <p className="text-gray-600">
                                    Please include details about your project, timeline, and specific questions you have. The more information you provide, the better we can assist you.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-bold mb-2 text-gray-800">Do you work with international clients?</h3>
                                <p className="text-gray-600">
                                    Absolutely! We work with clients worldwide and have experience managing projects across different time zones.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;