import React, { useState } from 'react';
import Navbar from "../navbar/Navbar.jsx";

function Products() {
    // Sample blog post data (replace with your actual data source)
    const allPosts = [
        {
            id: 1,
            title: "Getting Started with React",
            excerpt: "Learn the fundamentals of React and build your first application.",
            author: "Jane Doe",
            date: "May 1, 2025",
            category: "Development",
            tags: ["react", "javascript", "frontend"]
        },
        {
            id: 2,
            title: "Advanced CSS Techniques",
            excerpt: "Explore modern CSS features to create stunning layouts.",
            author: "John Smith",
            date: "April 28, 2025",
            category: "Design",
            tags: ["css", "design", "web"]
        },
        {
            id: 3,
            title: "Introduction to State Management",
            excerpt: "Compare different state management solutions for React applications.",
            author: "Alex Johnson",
            date: "April 25, 2025",
            category: "Development",
            tags: ["react", "state", "redux"]
        },
        {
            id: 4,
            title: "Optimizing Website Performance",
            excerpt: "Tips and tricks to improve your website's loading speed.",
            author: "Sarah Williams",
            date: "April 22, 2025",
            category: "Performance",
            tags: ["performance", "optimization", "web"]
        },
        {
            id: 5,
            title: "Responsive Design Best Practices",
            excerpt: "Create websites that look great on all devices with these techniques.",
            author: "Michael Brown",
            date: "April 20, 2025",
            category: "Design",
            tags: ["responsive", "design", "css"]
        },
        {
            id: 6,
            title: "Building Accessible Web Applications",
            excerpt: "Learn how to make your web applications accessible to everyone.",
            author: "Emma Davis",
            date: "April 18, 2025",
            category: "Accessibility",
            tags: ["accessibility", "a11y", "web"]
        },
    ];

    // State for filters and pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortBy, setSortBy] = useState("newest"); // Options: newest, oldest, alphabetical

    // Get unique categories for the filter
    const categories = ["All", ...new Set(allPosts.map(post => post.category))];

    // Filter posts based on selected category
    const filteredPosts = selectedCategory === "" || selectedCategory === "All"
        ? allPosts
        : allPosts.filter(post => post.category === selectedCategory);

    // Sort posts based on selection
    const sortedPosts = [...filteredPosts].sort((a, b) => {
        if (sortBy === "oldest") {
            return new Date(a.date) - new Date(b.date);
        } else if (sortBy === "alphabetical") {
            return a.title.localeCompare(b.title);
        } else {
            // Default: newest first
            return new Date(b.date) - new Date(a.date);
        }
    });

    // Get current posts for pagination
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

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
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="newest">Newest First</option>
                                    <option value="oldest">Oldest First</option>
                                    <option value="alphabetical">Alphabetical</option>
                                </select>
                            </div>
                        </div>
                        <div className="text-sm text-gray-600">
                            Showing {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, sortedPosts.length)} of {sortedPosts.length} posts
                        </div>
                    </div>

                    {/* Posts grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {currentPosts.map(post => (
                            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="h-40 bg-gray-200"></div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-md font-medium">
                                            {post.category}
                                        </span>
                                        <span className="text-sm text-gray-500">{post.date}</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h2>
                                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium">By {post.author}</span>
                                        <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                                            Read More →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2">
                            <button
                                onClick={prevPage}
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
                                    onClick={() => paginate(number)}
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
                                onClick={nextPage}
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