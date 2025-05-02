import React, {Component} from 'react';
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";
import "./home.css";
import { Search, Menu, X, ChevronRight, User, LogIn, Edit, Bell} from 'lucide-react';

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
                imageUrl: "https://placehold.co/600x400/png",
                comments: 8
            },
            {
                id: 2,
                title: "Advanced CSS Techniques for Modern Web Design",
                excerpt: "Explore cutting-edge CSS features that will take your web designs to the next level.",
                author: "Jane Smith",
                date: "March 28, 2025",
                category: "Design",
                imageUrl: "/api/placeholder/600/400",
                comments: 12
            },
            {
                id: 3,
                title: "Building a Personal Brand as a Developer",
                excerpt: "Tips and strategies to help you stand out in the competitive tech industry.",
                author: "Alex Johnson",
                date: "March 25, 2025",
                category: "Career",
                imageUrl: "/api/placeholder/600/400",
                comments: 8
            }
        ];
        const featuredPost = posts[0];
        const regularPosts = posts.slice(1);

        return (
            <div>
                <Navbar/>
                <div className="main-content">

                    <div className="home-content min-h-[80vh] grid gap-8 lg:grid-cols-2 p-6 mb-8">
                        <div className="flex flex-col justify-center px-4 py-8 lg:py-12">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h2 className="text-sm font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">Expand Your Knowledge</h2>
                                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                                        Welcome to DevBlog
                                    </h1>
                                </div>
                                <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
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
                                        className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg border-2 border-slate-300 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                                    >
                                        Subscribe
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 pt-6">
                                    <div className="flex -space-x-2">
                                        <img className="w-8 h-8 rounded-full ring-2 ring-white dark:ring-slate-800" src="/api/placeholder/40/40" alt="User avatar" />
                                        <img className="w-8 h-8 rounded-full ring-2 ring-white dark:ring-slate-800" src="/api/placeholder/40/40" alt="User avatar" />
                                        <img className="w-8 h-8 rounded-full ring-2 ring-white dark:ring-slate-800" src="/api/placeholder/40/40" alt="User avatar" />
                                    </div>
                                    <span className="text-sm text-slate-600 dark:text-slate-400">Join 2,000+ developers worldwide</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center relative">
                            <div className="absolute inset-0 bg-indigo-600 rounded-2xl blur-3xl opacity-20 dark:opacity-30 -z-10"></div>
                            <div className="relative w-full h-full max-w-lg">
                                <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
                                <div className="absolute -bottom-8 right-4 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                                <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                                    <img
                                        src="/public/10.jpg"
                                        alt="DevBlog Featured Image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Add this to your CSS or global stylesheet for animations */}
                    <style jsx>{`
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`}</style>

                    <div className="flex justify-center text-center mb-2 mt-4">
                        <h1 className="text-2xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            Featured Post
                        </h1>
                    </div>

                    <div className="grid gap-3 xl:grid-cols-3 lg:grid-cols-2 p-6 my-4">
                        <div>
                            <section id="featured" className="mb-12">
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                    <div className="flex-col">
                                        <div className="md:flex-shrink-0">
                                            <img className="h-full w-full object-cover" src={featuredPost.imageUrl} alt={featuredPost.title} />
                                        </div>
                                        <div className="p-8">
                                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{featuredPost.category}</div>
                                            <a href="#" className="block mt-1 text-2xl font-semibold text-gray-900 hover:underline">{featuredPost.title}</a>
                                            <p className="mt-2 text-gray-600">{featuredPost.excerpt}</p>
                                            <div className="mt-4 flex items-center">
                                                <div className="flex-shrink-0">
                                                    <User className="h-10 w-10 rounded-full bg-gray-100 p-2 text-gray-600" />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-gray-900">{featuredPost.author}</p>
                                                    <div className="flex space-x-1 text-sm text-gray-500">
                                                        <time dateTime="2020-03-16">{featuredPost.date}</time>
                                                        <span aria-hidden="true">&middot;</span>
                                                        <span>{featuredPost.comments} comments</span>
                                                    </div>
                                                </div>
                                                <div className="ml-auto">
                                                    <a
                                                        href="#"
                                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                                                    >
                                                        Read More
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div>
                            <section id="featured" className="mb-12">
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                    <div className="flex-col">
                                        <div className="md:flex-shrink-0">
                                            <img className="h-full w-full object-cover" src={featuredPost.imageUrl} alt={featuredPost.title} />
                                        </div>
                                        <div className="p-8">
                                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{featuredPost.category}</div>
                                            <a href="#" className="block mt-1 text-2xl font-semibold text-gray-900 hover:underline">{featuredPost.title}</a>
                                            <p className="mt-2 text-gray-600">{featuredPost.excerpt}</p>
                                            <div className="mt-4 flex items-center">
                                                <div className="flex-shrink-0">
                                                    <User className="h-10 w-10 rounded-full bg-gray-100 p-2 text-gray-600" />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-gray-900">{featuredPost.author}</p>
                                                    <div className="flex space-x-1 text-sm text-gray-500">
                                                        <time dateTime="2020-03-16">{featuredPost.date}</time>
                                                        <span aria-hidden="true">&middot;</span>
                                                        <span>{featuredPost.comments} comments</span>
                                                    </div>
                                                </div>
                                                <div className="ml-auto">
                                                    <a
                                                        href="#"
                                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                                                    >
                                                        Read More
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div>
                            <section id="featured" className="mb-12">
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                    <div className="flex-col">
                                        <div className="md:flex-shrink-0">
                                            <img className="h-full w-full object-cover" src={featuredPost.imageUrl} alt={featuredPost.title} />
                                        </div>
                                        <div className="p-8">
                                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{featuredPost.category}</div>
                                            <a href="#" className="block mt-1 text-2xl font-semibold text-gray-900 hover:underline">{featuredPost.title}</a>
                                            <p className="mt-2 text-gray-600">{featuredPost.excerpt}</p>
                                            <div className="mt-4 flex items-center">
                                                <div className="flex-shrink-0">
                                                    <User className="h-10 w-10 rounded-full bg-gray-100 p-2 text-gray-600" />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-gray-900">{featuredPost.author}</p>
                                                    <div className="flex space-x-1 text-sm text-gray-500">
                                                        <time dateTime="2020-03-16">{featuredPost.date}</time>
                                                        <span aria-hidden="true">&middot;</span>
                                                        <span>{featuredPost.comments} comments</span>
                                                    </div>
                                                </div>
                                                <div className="ml-auto">
                                                    <a
                                                        href="#"
                                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                                                    >
                                                        Read More
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className="flex justify-center text-center mb-2 mt-4">
                        <h1 className="text-2xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            Latest Post
                        </h1>
                    </div>

                    <div className="p-6 my-4">
                        <div className="flex justify-end items-center mb-6">
                            <a href="#" className="text-indigo-600 hover:text-indigo-500 text-sm font-medium flex items-center">
                                View All <ChevronRight className="ml-1 h-4 w-4" />
                            </a>
                        </div>
                        <div className="grid gap-3 xl:grid-cols-4 lg:grid-cols-2 ">
                            <div>
                                <section id="featured" className="mb-12">
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                        <div className="flex-col">
                                            <div className="md:flex-shrink-0">
                                                <img className="h-full w-full object-cover" src={featuredPost.imageUrl} alt={featuredPost.title} />
                                            </div>
                                            <div className="p-8">
                                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{featuredPost.category}</div>
                                                <a href="#" className="block mt-1 text-2xl font-semibold text-gray-900 hover:underline">{featuredPost.title}</a>
                                                <p className="mt-2 text-gray-600">{featuredPost.excerpt}</p>
                                                <div className="mt-4 flex items-center">
                                                    <div className="flex-shrink-0">
                                                        <User className="h-10 w-10 rounded-full bg-gray-100 p-2 text-gray-600" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-sm font-medium text-gray-900">{featuredPost.author}</p>
                                                        <div className="flex space-x-1 text-sm text-gray-500">
                                                            <time dateTime="2020-03-16">{featuredPost.date}</time>
                                                            <span aria-hidden="true">&middot;</span>
                                                            <span>{featuredPost.comments} comments</span>
                                                        </div>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <a
                                                            href="#"
                                                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                                                        >
                                                            Read More
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div>
                                <section id="featured" className="mb-12">
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                        <div className="flex-col">
                                            <div className="md:flex-shrink-0">
                                                <img className="h-full w-full object-cover" src={featuredPost.imageUrl} alt={featuredPost.title} />
                                            </div>
                                            <div className="p-8">
                                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{featuredPost.category}</div>
                                                <a href="#" className="block mt-1 text-2xl font-semibold text-gray-900 hover:underline">{featuredPost.title}</a>
                                                <p className="mt-2 text-gray-600">{featuredPost.excerpt}</p>
                                                <div className="mt-4 flex items-center">
                                                    <div className="flex-shrink-0">
                                                        <User className="h-10 w-10 rounded-full bg-gray-100 p-2 text-gray-600" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-sm font-medium text-gray-900">{featuredPost.author}</p>
                                                        <div className="flex space-x-1 text-sm text-gray-500">
                                                            <time dateTime="2020-03-16">{featuredPost.date}</time>
                                                            <span aria-hidden="true">&middot;</span>
                                                            <span>{featuredPost.comments} comments</span>
                                                        </div>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <a
                                                            href="#"
                                                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                                                        >
                                                            Read More
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div>
                                <section id="featured" className="mb-12">
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                        <div className="flex-col">
                                            <div className="md:flex-shrink-0">
                                                <img className="h-full w-full object-cover" src={featuredPost.imageUrl} alt={featuredPost.title} />
                                            </div>
                                            <div className="p-8">
                                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{featuredPost.category}</div>
                                                <a href="#" className="block mt-1 text-2xl font-semibold text-gray-900 hover:underline">{featuredPost.title}</a>
                                                <p className="mt-2 text-gray-600">{featuredPost.excerpt}</p>
                                                <div className="mt-4 flex items-center">
                                                    <div className="flex-shrink-0">
                                                        <User className="h-10 w-10 rounded-full bg-gray-100 p-2 text-gray-600" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-sm font-medium text-gray-900">{featuredPost.author}</p>
                                                        <div className="flex space-x-1 text-sm text-gray-500">
                                                            <time dateTime="2020-03-16">{featuredPost.date}</time>
                                                            <span aria-hidden="true">&middot;</span>
                                                            <span>{featuredPost.comments} comments</span>
                                                        </div>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <a
                                                            href="#"
                                                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                                                        >
                                                            Read More
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div>
                                <section id="featured" className="mb-12">
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                        <div className="flex-col">
                                            <div className="md:flex-shrink-0">
                                                <img className="h-full w-full object-cover" src={featuredPost.imageUrl} alt={featuredPost.title} />
                                            </div>
                                            <div className="p-8">
                                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{featuredPost.category}</div>
                                                <a href="#" className="block mt-1 text-2xl font-semibold text-gray-900 hover:underline">{featuredPost.title}</a>
                                                <p className="mt-2 text-gray-600">{featuredPost.excerpt}</p>
                                                <div className="mt-4 flex items-center">
                                                    <div className="flex-shrink-0">
                                                        <User className="h-10 w-10 rounded-full bg-gray-100 p-2 text-gray-600" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-sm font-medium text-gray-900">{featuredPost.author}</p>
                                                        <div className="flex space-x-1 text-sm text-gray-500">
                                                            <time dateTime="2020-03-16">{featuredPost.date}</time>
                                                            <span aria-hidden="true">&middot;</span>
                                                            <span>{featuredPost.comments} comments</span>
                                                        </div>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <a
                                                            href="#"
                                                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                                                        >
                                                            Read More
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                    </div>

                    <div className="p-6 mt-6 mb-8">
                        <section className="rounded-lg shadow-lg overflow-hidden">
                            <div className="px-6 py-12 md:py-16 md:px-12 lg:flex lg:items-center lg:justify-between">
                                <div>
                                    <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                                        <span className="block">Join our newsletter</span>
                                        <span className="block text-indigo-600">Get weekly updates on new articles</span>
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
                <Footer/>
            </div>
        );
    }
}

export default Home;