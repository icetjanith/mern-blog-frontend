import React from 'react';
import Navbar from "../navbar/Navbar.jsx";
import "../home/home.css";

function About() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="main-content py-16">
                {/* Hero Section */}
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold mb-6 text-gray-800">About Our Company</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We're a passionate team dedicated to creating innovative solutions that help businesses thrive in the digital landscape.
                        </p>
                    </div>
                </div>

                {/* Our Story Section */}
                <div className="max-w-6xl mx-auto px-4 mb-20">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2 bg-indigo-600">
                                <div className="h-64 md:h-full bg-cover bg-center" style={{ backgroundColor: '#4F46E5' }}></div>
                            </div>
                            <div className="md:w-1/2 p-8 md:p-12">
                                <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
                                <p className="text-gray-600 mb-4">
                                    Founded in 2020, our journey began with a simple mission: to bridge the gap between technology and everyday business needs. What started as a small team of passionate developers has grown into a thriving company with clients across the globe.
                                </p>
                                <p className="text-gray-600 mb-4">
                                    We believe in the transformative power of technology when it's thoughtfully designed and implemented. Our approach combines technical expertise with a deep understanding of business processes to deliver solutions that make a real difference.
                                </p>
                                <p className="text-gray-600">
                                    Today, we continue to push boundaries and explore new possibilities, guided by our commitment to excellence and innovation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Values Section */}
                <div className="bg-gray-100 py-16">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Core Values</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-800">Innovation</h3>
                                <p className="text-gray-600">
                                    We continuously seek new ideas and approaches to solve complex problems, embracing creativity and forward-thinking in everything we do.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-800">Integrity</h3>
                                <p className="text-gray-600">
                                    We conduct business with honesty, transparency, and ethical standards, building trust with our clients and within our team.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-800">Collaboration</h3>
                                <p className="text-gray-600">
                                    We believe in the power of teamwork and partnership, working closely with our clients to achieve shared goals and success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Meet Our Team</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Team Member 1 */}
                        <div className="text-center">
                            <div className="w-40 h-40 rounded-full bg-gray-300 mx-auto mb-4"></div>
                            <h3 className="text-xl font-bold text-gray-800">Sarah Johnson</h3>
                            <p className="text-indigo-600 font-medium mb-2">CEO & Founder</p>
                            <p className="text-gray-600 text-sm">
                                With over 15 years of experience in tech leadership, Sarah drives our vision and strategy.
                            </p>
                        </div>
                        {/* Team Member 2 */}
                        <div className="text-center">
                            <div className="w-40 h-40 rounded-full bg-gray-300 mx-auto mb-4"></div>
                            <h3 className="text-xl font-bold text-gray-800">Michael Chen</h3>
                            <p className="text-indigo-600 font-medium mb-2">CTO</p>
                            <p className="text-gray-600 text-sm">
                                Michael leads our technical direction with expertise in emerging technologies and innovation.
                            </p>
                        </div>
                        {/* Team Member 3 */}
                        <div className="text-center">
                            <div className="w-40 h-40 rounded-full bg-gray-300 mx-auto mb-4"></div>
                            <h3 className="text-xl font-bold text-gray-800">Lisa Rodriguez</h3>
                            <p className="text-indigo-600 font-medium mb-2">Design Director</p>
                            <p className="text-gray-600 text-sm">
                                Lisa brings creativity and user-centered design principles to every project we undertake.
                            </p>
                        </div>
                        {/* Team Member 4 */}
                        <div className="text-center">
                            <div className="w-40 h-40 rounded-full bg-gray-300 mx-auto mb-4"></div>
                            <h3 className="text-xl font-bold text-gray-800">David Wilson</h3>
                            <p className="text-indigo-600 font-medium mb-2">Client Success Manager</p>
                            <p className="text-gray-600 text-sm">
                                David ensures our clients receive exceptional support and achieve their business goals.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-indigo-700 py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6 text-white">Ready to Work With Us?</h2>
                        <p className="text-indigo-100 mb-8 text-lg">
                            Let's discuss how we can help you achieve your business goals with tailored technology solutions.
                        </p>
                        <button className="bg-white text-indigo-700 font-bold py-3 px-8 rounded-lg hover:bg-indigo-50 transition duration-300">
                            Contact Us Today
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;