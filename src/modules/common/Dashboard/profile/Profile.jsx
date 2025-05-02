import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

function Profile() {
    const { currentUser } = useSelector((state) => state.user);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [preview, setPreview] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        reset({
            username: currentUser?.user?.username || "",
            email: currentUser?.user?.email || "",
        });
    }, [currentUser, reset]);

    const updateUser = async (data) => {
        console.log("Form data submitted:", data);
        // Implement your update logic here
        setIsEditing(false);
    }

    const handleFileInput = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                setPreview(e.target.result);
            }
            fileReader.readAsDataURL(file);
        }
    }

    return (
        <div className="p-4 sm:ml-64">
            <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden mt-14">
                {/* Header */}
                <div className="relative h-48 bg-gradient-to-r from-indigo-500 to-purple-600">
                    <div className="absolute -bottom-16 left-8">
                        <div className="relative">
                            <img
                                src={preview || "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid"}
                                className="w-32 h-32 rounded-full border-4 border-white dark:border-slate-700 object-cover"
                                alt="Profile"
                            />
                            <label htmlFor="fileInput"
                                   className="absolute bottom-2 right-2 bg-white dark:bg-slate-700 p-2 rounded-full cursor-pointer shadow-md hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </label>
                            <input type="file" id="fileInput" className="hidden" accept="image/*" onChange={handleFileInput} />
                        </div>
                    </div>
                    <div className="absolute top-4 right-4">
                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors duration-200 flex items-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            {isEditing ? "Cancel" : "Edit Profile"}
                        </button>
                    </div>
                </div>

                {/* Profile content */}
                <div className="pt-20 px-8 pb-8">
                    <form onSubmit={handleSubmit(updateUser)}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Username</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            disabled={!isEditing}
                                            className={`w-full pl-10 pr-4 py-2 border ${errors.username ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100 dark:disabled:bg-slate-800 disabled:cursor-not-allowed transition-colors duration-200`}
                                            placeholder="Your username"
                                            {...register("username", {
                                                required: "Username is required",
                                                maxLength: { value: 20, message: "Max 20 characters allowed" },
                                                pattern: {
                                                    value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                                                    message: "Invalid username"
                                                }
                                            })}
                                        />
                                    </div>
                                    {errors.username && <p className="mt-1 text-sm text-red-500">{errors.username.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="email"
                                            disabled={!isEditing}
                                            className={`w-full pl-10 pr-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100 dark:disabled:bg-slate-800 disabled:cursor-not-allowed transition-colors duration-200`}
                                            placeholder="your.email@example.com"
                                            {...register("email", {
                                                required: "Email is required",
                                                maxLength: { value: 100, message: "Max 100 characters allowed" },
                                                pattern: {
                                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                    message: "Invalid email address"
                                                }
                                            })}
                                        />
                                    </div>
                                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">New Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="password"
                                            disabled={!isEditing}
                                            className={`w-full pl-10 pr-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100 dark:disabled:bg-slate-800 disabled:cursor-not-allowed transition-colors duration-200`}
                                            placeholder={isEditing ? "Leave blank to keep current password" : "••••••••"}
                                            {...register("password", {
                                                maxLength: { value: 16, message: "Max 16 characters allowed" },
                                            })}
                                        />
                                    </div>
                                    {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
                                </div>

                                <div className="flex items-center justify-between pt-4">
                                    <div className="text-sm">
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Last updated: <span className="font-medium text-gray-900 dark:text-white">April 2, 2025</span>
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center">
                                        <a href="#account-settings" className="text-indigo-600 hover:text-indigo-500 text-sm font-medium dark:text-indigo-400 dark:hover:text-indigo-300">
                                            Account settings
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {isEditing && (
                            <div className="mt-8 flex justify-end gap-4">
                                <button
                                    type="submit"
                                    className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
                                >
                                    Save Changes
                                </button>
                                <button
                                    type="button"
                                    className="px-6 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
                                >
                                    Delete Account
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile;