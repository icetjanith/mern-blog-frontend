import React from 'react';
import '../dash/dash.css';
import {useNavigate} from "react-router-dom";

function Post() {

    const navigate = useNavigate();

    const createPost = () => {
        navigate("/create-post");
    }

    return (
        <div className="dashboard-content p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                Post
                <button className="cursor-pointer ms-2" onClick={createPost}>Add Post</button>
            </div>
        </div>
    );
}

export default Post;