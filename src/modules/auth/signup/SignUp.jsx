import React from 'react';
import {useState} from "react";
import {useForm} from "react-hook-form";
import './signup.css'
import {_post} from "../../../utills/api.js";
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";
import {signInStart, signInSuccess, signInFailure, signInEnd} from "../../../redux/user/userSlice.js";
import {useDispatch, useSelector} from "react-redux";
import Oauth from "../oauth/Oauth.jsx";

function SignUp() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    let loading = useSelector(state => state.user.loading);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        dispatch(signInStart());
        try {
            const response = await _post({
                endpointUrl: "/api/auth/signup",
                payload: data,
                callback: (res) => console.log(res),
                errcallback: (e) => console.log(e),
            });
            // Extract only serializable data
            const userData = {
                ...response.data,  // Ensure you only store serializable data like user details
                token: response.data.token, // Store only necessary tokens if required
            };
            console.log(response);
            dispatch(signInSuccess(userData));
            navigate('/auth/login')
        } catch (err) {
            console.error(err);
            dispatch(signInFailure(err));
        }finally {
            dispatch(signInEnd())
            console.log(data);
        }

    }
    return (
        <div className="signup-form w-full bg-gray-900 flex items-center justify-center min-h-screen">
            <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg flex w-full max-w-4xl">
                <div className="w-full p-6">
                    <h2 className="text-3xl font-bold mb-6">Create your Account</h2>
                    <p className="mb-4 text-gray-400">Start your website in seconds. Already have an account? <a
                        href="#"
                        className="text-blue-400">Login
                        here.</a></p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex justify-between">
                            <div className="w-1/2 mb-4 me-3">
                                <label className="block text-gray-300">Your email</label>
                                <input type="email" placeholder="name@company.com" {...register("email", {
                                    required: "Email is required",
                                    maxLength: {value: 100, message: "Max 100 characters allowed"},
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Invalid email address"
                                    }
                                })}
                                       className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"/>
                                {errors.email && <p className="text-red-400">{errors.email.message}</p>}
                            </div>
                            <div className="w-1/2 mb-4">
                                <label className="block text-gray-300">Full Name</label>
                                <input type="text" placeholder="e.g. Bonnie Green"
                                       {...register("fullName", {
                                           required: "Name is required",
                                           maxLength: {
                                               value: 20,
                                               message: "Max 20 characters allowed"
                                           },
                                           pattern: {
                                               value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                                               message: "Invalid name"
                                           }
                                       })}
                                       className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"/>
                                {errors.fullName && <p className="text-red-400">{errors.fullName.message}</p>}
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <div className="w-1/2 mb-4 me-3">
                                <label className="block text-gray-300">Username</label>
                                <input type="text" placeholder="username"
                                       {...register("username", {
                                           required: "Username is required",
                                           maxLength: {
                                               value: 12,
                                               message: "Max 12 characters allowed"
                                           }
                                       })}
                                       className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"/>
                                {errors.username && <p className="text-red-400">{errors.username.message}</p>}
                            </div>
                            <div className="w-1/2 mb-4">
                                <label className="block text-gray-300">Password</label>
                                <input type="password" placeholder="••••••••"
                                       {...register("password", {
                                           required: "Password is required",
                                           maxLength: {
                                               value: 16,
                                               message: "Max 16 characters allowed"
                                           }
                                       })}
                                       className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"/>
                                {errors.password && <p className="text-red-400">{errors.password.message}</p>}
                            </div>
                        </div>

                        <div className="my-4 text-center text-gray-400">or</div>
                        <Oauth></Oauth>
                        <button
                            className="w-full bg-gray-700 flex items-center cursor-pointer justify-center py-2 rounded mb-2">
                            <img src="https://www.svgrepo.com/show/119325/apple.svg"
                                 className="w-5 h-5 mr-2"/> Sign up
                            with Apple
                        </button>
                        <div className="flex mt-3 items-start space-x-2">
                            <input type="checkbox"
                                   className="h-5 w-5 rounded border-gray-600 bg-gray-800 text-blue-600 focus:ring-blue-500"/>
                            <span>By signing up, you are creating a Flowbite account, and you agree to Flowbite’s Terms of Use and Privacy Policy.</span>
                        </div>
                        <div className="flex mt-3 mb-3 items-start space-x-2">
                            <input type="checkbox"
                                   className="h-5 w-5 rounded border-gray-600 bg-gray-800 text-blue-600 focus:ring-blue-500"/>
                            <span>By signing up, you are creating a Flowbite account, and you agree to Flowbite’s Terms of Use and Privacy Policy.</span>
                        </div>
                        <button className={`w-full flex items-center justify-center py-2 rounded
                        ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800 cursor-pointer"}`}
                                disabled={loading}>
                            {loading ?
                                (<>
                                    <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor"
                                              d="M4 12a8 8 0 018-8v8H4z"></path>
                                    </svg>
                                    Processing...
                                </>)
                                : ("Create Account")}

                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;