import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { _post } from "../../../utills/api.js";
import { useNavigate } from "react-router-dom";
import { signInStart, signInSuccess, signInFailure, signInEnd } from "../../../redux/user/userSlice.js";
import { useDispatch, useSelector } from "react-redux";
import Oauth from "../oauth/Oauth.jsx";

function SignUp() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = watch("password");
    let loading = useSelector(state => state.user.loading);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [signupStatus, setSignupStatus] = useState({
        error: false,
        message: ''
    });

    const onSubmit = async (data) => {
        dispatch(signInStart());
        try {
            const response = await _post({
                endpointUrl: "/api/auth/signup",
                payload: data,
                callback: (res) => console.log(res),
                errcallback: (e) => {
                    setSignupStatus({
                        error: true,
                        message: e.message || 'Signup failed. Please try again.'
                    });
                },
            });

            // Extract only serializable data
            const userData = {
                ...response.data,
                token: response.data.token,
            };

            dispatch(signInSuccess(userData));
            navigate('/auth/login');
        } catch (err) {
            console.error(err);
            setSignupStatus({
                error: true,
                message: err.message || 'An unexpected error occurred.'
            });
            dispatch(signInFailure(err));
        } finally {
            dispatch(signInEnd());
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">

            <div className="main-content py-12 flex items-center justify-center">
                <div className="w-full max-w-md px-4">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-8">
                        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>

                        {signupStatus.message && (
                            <div className={`mb-6 p-4 rounded-md ${signupStatus.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                                {signupStatus.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="name@company.com"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                message: "Invalid email address"
                                            }
                                        })}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="John Doe"
                                        {...register("fullName", {
                                            required: "Full name is required",
                                            maxLength: {
                                                value: 50,
                                                message: "Max 50 characters allowed"
                                            }
                                        })}
                                    />
                                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                        Username <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="username"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="username"
                                        {...register("username", {
                                            required: "Username is required",
                                            minLength: {
                                                value: 3,
                                                message: "Username must be at least 3 characters"
                                            },
                                            maxLength: {
                                                value: 20,
                                                message: "Username must be max 20 characters"
                                            }
                                        })}
                                    />
                                    {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                        Password <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="••••••••"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 6,
                                                message: "Password must be at least 6 characters"
                                            }
                                        })}
                                    />
                                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        {...register("terms", {
                                            required: "You must agree to the terms and conditions"
                                        })}
                                    />
                                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                                        I agree to the{' '}
                                        <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                            Terms and Conditions
                                        </a>
                                    </label>
                                </div>
                                {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>}
                            </div>

                            <button
                                type="submit"
                                className={`w-full py-3 rounded-md transition duration-300 ${
                                    loading || !watch('terms')
                                        ? "bg-indigo-300 cursor-not-allowed"
                                        : "bg-indigo-600 text-white hover:bg-indigo-700"
                                }`}
                                disabled={loading || !watch('terms')}
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center">
                                        <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V4z"></path>
                                        </svg>
                                        Processing...
                                    </div>
                                ) : (
                                    "Create Account"
                                )}
                            </button>

                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">
                                        Or continue with
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                                    </svg>
                                    Facebook
                                </button>
                                <Oauth/>
                            </div>

                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-600">
                                    Already have an account?{' '}
                                    <a href="/auth/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;