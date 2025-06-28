import React, {useState} from 'react';
import Navbar from "../navbar/Navbar.jsx";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";

function CreatePost() {

    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");

    const handleReactQuill = (content, delta, source, editor) => {
        setContent(() => editor.getText());
    }

    const handleFileSubmit = (e) => {
        if (e.target.files){
            setFile(e.target.files[0]);
        }
    }

    const handleFileUpload = async (file) => {
        console.log(file.type);
        try {
            const response = await axios.get(
                "http://localhost:3006/api/upload/generate-presigned-url",
                {params: {
                    fileType: file.type
                },
                withCredentials: true});
            const {fileName, signedUrl} = response.data;
            await axios.put(
                signedUrl,
                file,
                {
                    headers: {
                        'Content-Type': file.type,
                    }
                }
            );
            console.log("upload success");
            const finalUrl = `https://${import.meta.env.VITE_S3_BUCKET_NAME}.s3.${import.meta.env.VITE_S3_REGION}.amazonaws.com/${fileName}`;
            const post = {
                title: title,
                content: content,
                image: finalUrl,
                category: category,
            };
            const uploadPostResponse = await axios.post(
                "http://localhost:3006/api/post",
                {post: post},
                {withCredentials: true});
            console.log(uploadPostResponse);
        }catch(e){
            console.error("Error during post creation:", e);
            if (e.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error("Data:", e.response.data);
                console.error("Status:", e.response.status);
                console.error("Headers:", e.response.headers);
            } else if (e.request) {
                // The request was made but no response was received
                console.error("Request:", e.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error', e.message);
            }
        }
    }

    return (
        <>
            <Navbar/>
            <div className="p-3 max-w-3xl mx-auto min-h-screen">
                <h1 className="text-3xl text-center my-6 font-semibold">Create Post</h1>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 sm:flex-row justify-between ">
                        <div className="lg:ms-2">
                            <label>Title</label>
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                type="text" className="w-full p-2 border-2 border-gray-200 rounded-md"/>
                        </div>
                        <div className="lg:me-2">
                            <form className="max-w-sm mx-auto">
                                <label htmlFor="countries"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an
                                    option</label>
                                <select
                                    onChange={(e) => setCategory(e.target.value)}
                                    id="countries"
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
                                            onChange={handleFileSubmit}
                                        />
                                    </label>
                                    <span className="text-gray-700 py-2 px-4">{file ? file.name:"No file chosen"}</span>
                                </div>
                                <button
                                    onClick={() => handleFileUpload(file)}
                                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-md shadow-md cursor-pointer hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                                    Upload Image
                                </button>
                            </div>

                        </div>
                    </div>
                    <ReactQuill onChange={handleReactQuill} value={content} theme="snow" placeholder="Write your post here..." className="h-70"/>
                </div>
            </div>
        </>

    );
}

export default CreatePost;