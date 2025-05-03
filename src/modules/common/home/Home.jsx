import React, {Component} from 'react';
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";
import "./home.css";
import { Search, Menu, X, ChevronRight, User, LogIn, Edit, Bell} from 'lucide-react';
import PostCard from "../../components/post/Post.jsx";

class Home extends Component {
    render() {
        const posts = [
            {
                id: 1,
                title: "Getting Started with React and Tailwind",
                excerpt: "Learn how to set up a new project with React and Tailwind CSS for rapid development.",
                author: "John Doe",
                date: "April 2, 2025",
                category: "Development",
                imageUrl: "/20.jpg",
                comments: 8
            },
            {
                id: 2,
                title: "Advanced CSS Techniques for Modern Web Design",
                excerpt: "Explore cutting-edge CSS features that will take your web designs to the next level.",
                author: "Jane Smith",
                date: "March 28, 2025",
                category: "Design",
                imageUrl: "/20.jpg",
                comments: 12
            },
            {
                id: 3,
                title: "Building a Personal Brand as a Developer",
                excerpt: "Tips and strategies to help you stand out in the competitive tech industry.",
                author: "Alex Johnson",
                date: "March 25, 2025",
                category: "Career",
                imageUrl: "/20.jpg",
                comments: 8
            }
        ];
        const featuredPost = posts[0];
        const regularPosts = posts.slice(1);

        return (
            <div>
                <Navbar/>
                <div className="main-content">
                    {/* Hero Section */}
                    <div className="home-content min-h-[80vh] grid gap-8 lg:grid-cols-2 p-6 mb-8 mx-6">
                        <div className="flex flex-col justify-center px-4 py-8 lg:py-12">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h2 className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">Expand Your Knowledge</h2>
                                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                                        Welcome to DevBlog
                                    </h1>
                                </div>
                                <p className="text-xl text-slate-700 max-w-2xl leading-relaxed">
                                    A community-driven platform dedicated to web development, programming insights, and practical tech career advice for developers at all levels.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <a
                                        href="#featured"
                                        className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300 shadow-lg shadow-indigo-600/20"
                                    >
                                        Start Reading
                                    </a>
                                    <a
                                        href="#newsletter"
                                        className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg border-2 border-slate-300 hover:border-indigo-400 text-slate-700 hover:text-indigo-600 transition-colors duration-300"
                                    >
                                        Subscribe
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 pt-6">
                                    <div className="flex -space-x-2">
                                        <img className="w-8 h-8 rounded-full ring-2 ring-white" src="/user.png" alt="User avatar" />
                                        <img className="w-8 h-8 rounded-full ring-2 ring-white" src="/user.png" alt="User avatar" />
                                        <img className="w-8 h-8 rounded-full ring-2 ring-white" src="/user.png" alt="User avatar" />
                                    </div>
                                    <span className="text-sm text-slate-600">Join 2,000+ developers worldwide</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center relative">
                            <div className="absolute inset-0 bg-indigo-600 rounded-2xl blur-3xl opacity-20 -z-10"></div>
                            <div className="relative w-full h-full max-w-lg">
                                <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                                <div className="absolute -bottom-8 right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                                <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                                    <img
                                        src="/10.jpg"
                                        alt="DevBlog Featured Image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Featured Posts Section */}
                    <div className="flex justify-center text-center mb-2 mt-6">
                        <h1 className="text-2xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            Featured Posts
                        </h1>
                    </div>

                    <div className="grid gap-3 xl:grid-cols-3 lg:grid-cols-2 p-6 my-4 mx-6 mt-6">
                        {posts.map(post => (
                            <div key={post.id}>
                                <PostCard post={post} />
                            </div>
                        ))}
                    </div>

                    {/* Latest Posts Section */}
                    <div className="flex justify-center text-center mb-2 mt-6 mx-6">
                        <h1 className="text-2xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            Latest Posts
                        </h1>
                    </div>

                    <div className="p-6 mx-6 mt-6">
                        <div className="flex justify-end items-center mb-6">
                            <a href="#" className="text-indigo-600 hover:text-indigo-500 text-sm font-medium flex items-center">
                                View All <ChevronRight className="ml-1 h-4 w-4" />
                            </a>
                        </div>
                        <div className="grid gap-3 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                            {
                                [...posts, ...posts].slice(0, 4).map((post, index) => (
                                    <div key={`latest-${index}`} className="mb-6">
                                        <PostCard post={post} compact={true} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div id="newsletter" className="p-6 mt-6 mx-6">
                        <section className="rounded-lg shadow-lg  bg-indigo-600 text-white">
                            <div className="px-6 py-12 md:py-16 md:px-12 lg:flex lg:items-center lg:justify-between">
                                <div>
                                    <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                                        <span className="block">Join our newsletter</span>
                                        <span className="block text-indigo-200">Get weekly updates on new articles</span>
                                    </h2>
                                </div>
                                <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
                                    <div className="inline-flex rounded-md shadow">
                                        <input
                                            type="email"
                                            className="py-3 px-4 rounded-l-md w-64 border-0 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
                                            placeholder="Your email address"
                                        />
                                        <button
                                            className="bg-white border border-transparent rounded-r-md py-3 px-6 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="mt-28"><Footer/></div>
            </div>
        );
    }
}

export default Home;