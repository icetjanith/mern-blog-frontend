import React, {useEffect, useState} from 'react';
import Navbar from "../navbar/Navbar.jsx";
import axios from "axios";
import PostCard from "../../components/post/Post.jsx";

function Products() {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortBy, setSortBy] = useState("asc"); // Options: newest, oldest, alphabetical
    const [sortOrder, setSortOrder] = useState("desc");
    const [limit, setLimit] = useState(9);

    const [apiPosts, setApiPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [prevPage, setPrevPage] = useState(1);
    const [nextPage, setNextPage] = useState(1);

    // Get unique categories for the filter
    const categories = ["All", ...new Set(apiPosts.map(post => post.category))];

    const handleNextPageBtn = (currentPage) => {
        setCurrentPage(currentPage+1);
    }

    const handlePrevBtn = (currentPage) => {
        setCurrentPage(currentPage-1);
    }

    const handlePaginationBtn = (number) => {
        setCurrentPage(number);
    }

    const getPosts = async () => {
        try{
            const response = await axios.get(
                "http://localhost:3006/api/post",
                {params: {
                    page: currentPage,
                        limit: postsPerPage,
                        order: sortOrder
                    }}
            );
            setApiPosts(response.data.posts);
            setTotalPages(response.data.totalPages);
            console.log(response.data.posts);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getPosts();
    },[sortOrder, currentPage]);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="main-content py-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">Explore Our Blog Posts</h1>
                    <p className="text-lg opacity-90 max-w-2xl mb-8">
                        Discover the latest insights, tutorials, and stories from our team of experts and contributors.
                    </p>

                    {/* Filters and sorting */}
                    <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div>
                                <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">
                                    Filter by Category
                                </label>
                                <select
                                    id="category-filter"
                                    value={selectedCategory}
                                    onChange={(e) => {
                                        setSelectedCategory(e.target.value);
                                        setCurrentPage(1); // Reset to first page when filter changes
                                    }}
                                    className="bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    {categories.map((category, index) => (
                                        <option key={index} value={category === "All" ? "" : category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="sort-by" className="block text-sm font-medium text-gray-700 mb-1">
                                    Sort By
                                </label>
                                <select
                                    id="sort-by"
                                    value={sortOrder}
                                    onChange={(e) => setSortOrder(e.target.value)}
                                    className="bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="desc">Newest First</option>
                                    <option value="asc">Oldest First</option>
                                    <option value="alphabetical">Alphabetical</option>
                                </select>
                            </div>
                        </div>
                        <div className="text-sm text-gray-600">
                            Showing {postsPerPage} of {postsPerPage*totalPages} posts
                        </div>
                    </div>

                    {/* Posts grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {apiPosts.map(post => (
                            <div key={post.id}>
                                <PostCard post={post} compact={true}/>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2">
                            <button
                                onClick={() => handlePrevBtn(currentPage)}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 rounded-md ${
                                    currentPage === 1
                                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                        : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                                }`}
                            >
                                Previous
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                                <button
                                    key={number}
                                    onClick={() => handlePaginationBtn(number)}
                                    className={`w-10 h-10 rounded-md flex items-center justify-center ${
                                        currentPage === number
                                            ? 'bg-indigo-600 text-white'
                                            : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                                    }`}
                                >
                                    {number}
                                </button>
                            ))}
                            <button
                                onClick={() => handleNextPageBtn(currentPage)}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 rounded-md ${
                                    currentPage === totalPages
                                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                        : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                                }`}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Products;