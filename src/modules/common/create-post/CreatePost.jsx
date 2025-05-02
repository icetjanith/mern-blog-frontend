import React, {useState} from 'react';
import Navbar from "../navbar/Navbar.jsx";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CreatePost() {

    return (
        <>
            <Navbar/>
            <div className="p-3 max-w-3xl mx-auto min-h-screen">
                <h1 className="text-3xl text-center my-6 font-semibold">Create Post</h1>
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 sm:flex-row justify-between ">
                        <div className="lg:ms-2">
                            <label>Title</label>
                            <input type="text" className="w-full p-2 border-2 border-gray-200 rounded-md"/>
                        </div>
                        <div className="lg:me-2">
                            <form className="max-w-sm mx-auto">
                                <label htmlFor="countries"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an
                                    option</label>
                                <select id="countries"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value='uncategorized'>Select a category</option>
                                    <option value='javascript'>JavaScript</option>
                                    <option value='reactjs'>React.js</option>
                                    <option value='nextjs'>Next.js</option>
                                </select>
                            </form>

                        </div>
                    </div>
                    <div className="flex justify-between items-center border-2 border-dotted border-teal-500 p-3">
                        <div className="w-full">
                            <p className="text-base font-normal mb-2">Upload file</p>
                            <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row justify-between w-full">
                                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                                    <label className="bg-gray-800 text-white py-2 px-4 cursor-pointer hover:bg-gray-700 transition-colors">
                                        Choose File
                                        <input
                                            type="file"
                                            className="hidden"
                                        />
                                    </label>
                                    <span className="text-gray-700 py-2 px-4">No file chosen</span>
                                </div>
                                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-md shadow-md cursor-pointer hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                                    Upload Image
                                </button>
                            </div>

                        </div>
                    </div>
                    <ReactQuill theme="snow" placeholder="Write your post here..." className="h-70"/>
                </form>
            </div>
        </>

    );
}

export default CreatePost;