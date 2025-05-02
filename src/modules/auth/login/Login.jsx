import React from 'react';
import {useState} from "react";
import {useForm} from "react-hook-form";
import {_post} from "../../../utills/api.js";
import 'react-toastify/dist/ReactToastify.css';
import "./login.css"
import {useDispatch} from "react-redux";
import {signInStart, signInSuccess, signInFailure, signInEnd} from "../../../redux/user/userSlice.js";
import {useNavigate} from "react-router-dom";

function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            const response = await _post({
                endpointUrl: "/api/auth/login",
                payload: data,
                callback: (res) => console.log(res),
                errcallback: (e) => console.log(e),
            });
            console.log(response);
            dispatch(signInSuccess(response.data));
            navigate('/');
        } catch (err) {
            console.error(err);
        } finally {
            console.log(data);
        }

    }
    return (
        <div className="login-form flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-white text-center">Welcome back</h2>
                <p className="text-gray-400 text-center">Start your website in seconds. Don't have an account? <a
                    href="#"
                    className="text-blue-500">Sign
                    up.</a></p>

                <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block text-gray-400">Email</label>
                        <input type="email" placeholder="name@company.com"
                               className="w-full px-4 py-2 mt-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500 text-white"
                            {...register("email",{
                                required:"Email is required",
                                maxLength:{value:100,message:"Max 100 characters allowed"},
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Invalid email address"
                                }
                            })}/>
                        {errors.email && <p className="text-red-400">{errors.email.message}</p>}
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-400">Password</label>
                        <input type="password" placeholder="••••••••"
                               className="w-full px-4 py-2 mt-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500 text-white"
                        {...register("password",{
                            required:"Password is required",
                            maxLength:{value:16,message:"Max 16 characters allowed"},
                        })}/>
                        {errors.password && <p className="text-red-400">{errors.password.message}</p>}
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <label className="inline-flex items-center text-gray-400">
                            <input type="checkbox" className="text-blue-500 border-gray-600 bg-gray-700 focus:ring-0"/>
                            <span className="ml-2">Remember me</span>
                        </label>
                        <a href="#" className="text-blue-500">Forgot password?</a>
                    </div>

                    <button className="w-full mt-6 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Sign in
                        to
                        your account
                    </button>
                </form>

                <div className="flex items-center my-6">
                    <div className="flex-1 border-t border-gray-600"></div>
                    <span className="px-3 text-gray-400">or</span>
                    <div className="flex-1 border-t border-gray-600"></div>
                </div>

                <div className="mt-4 space-y-2">
                    <button
                        className="w-full flex items-center justify-center px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600">
                        <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5 mr-2"/> Sign in
                        with
                        Google
                    </button>
                    <button
                        className="w-full flex items-center justify-center px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600">
                        <img src="https://www.svgrepo.com/show/303120/apple-black-logo.svg"
                             className="w-5 h-5 mr-2"/> Sign
                        in with Apple
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;