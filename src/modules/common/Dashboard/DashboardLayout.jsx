import React, {useState} from 'react';
import "./dashboard-layout.css";
import {Link, useLocation} from "react-router-dom";
import Dash from "./dash/Dash.jsx";
import Profile from "./profile/Profile.jsx";
import Post from "./post/Post.jsx";
import UsersDetails from "./users/UsersDetails.jsx";
import {FaMoon, FaSun} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {setTheme} from "../../../redux/theme/themeSlice.js";

function DashboardLayout() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    console.log(sidebarOpen);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const tab = queryParams.get("tab");

    const dispatch = useDispatch();
    const {theme} = useSelector((state)=>state.theme);
    const setThemeColor = () => {
        dispatch(setTheme());
    }

    return (
        <div className="main-page">

            <div className="header">

                <nav
                    className="fixed top-0 z-50 w-full border-b border-gray-200">
                    <div className="px-3 py-3 lg:px-5 lg:pl-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-start rtl:justify-end">
                                <button type="button"
                                        onClick={() => {
                                            setSidebarOpen(() => !sidebarOpen)
                                        }}
                                        className="inline-flex items-center p-2 mt-2 ms-3 text-sm rounded-lg sm:hidden hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                    <span className="sr-only">Open sidebar</span>
                                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path clipRule="evenodd" fillRule="evenodd"
                                              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                    </svg>
                                </button>
                                <span
                                    className="bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-1 rounded-lg text-white">
                                    Janith's
                                 </span>
                                <span className="ml-2">
                                    Blog
                                </span>
                            </div>
                            <div className="flex items-center">
                                <button className={`me-4 px-2 py-2 rounded-full hover:cursor-pointer ${theme==="light" ? "bg-gray-200 hover:bg-gray-300 border-2 border-gray-300":"border-2 border-b-indigo-50 hover:bg-gray-600"}`} onClick={setThemeColor}>
                                    {theme === "light" ? <FaMoon/> : <FaSun/>}
                                </button>
                                <div className="relative">
                                    {/* Avatar Button */}
                                    <button
                                        type="button"
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                    >
                                        <span className="sr-only">Open user menu</span>
                                        <img className="w-8 h-8 rounded-full"
                                             src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                             alt="User"/>
                                    </button>

                                    {/* Dropdown Menu */}
                                    {dropdownOpen && (
                                        <div
                                            className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md dark:bg-gray-700 dark:border-gray-600">
                                            <div className="px-4 py-3">
                                                <p className="text-sm text-gray-900 dark:text-white">Neil Sims</p>
                                                <p className="text-sm font-medium text-gray-500 truncate dark:text-gray-300">neil.sims@example.com</p>
                                            </div>
                                            <ul className="py-1">
                                                <li>
                                                    <a href="#"
                                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">Dashboard</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">Settings</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">Earnings</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">Sign
                                                        out</a>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <aside id="default-sidebar"
                   className={`sidebar fixed left-0 border-r border-gray-200 z-40 w-64 h-screen transition-transform  
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} ${theme === "light" ? "bg-white":""} sm:translate-x-0`}
                   aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to="?tab=dash"
                               className="flex items-center p-2  rounded-lg hover:bg-gray-100 dark:hover:bg-gray-300 group">
                                <svg
                                    className="w-5 h-5 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 22 21">
                                    <path
                                        d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                    <path
                                        d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                                </svg>
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="?tab=profile">
                                <div
                                    className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-300 group">
                                    <svg
                                        className="shrink-0 w-5 h-5 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        viewBox="0 0 18 18">
                                        <path
                                            d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
                                    <span
                                        className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="?tab=posts"
                               className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-300 group">
                                <svg
                                    className="shrink-0 w-5 h-5 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Posts</span>
                                <span
                                    className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="?tab=users"
                               className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-300 group">
                                <svg
                                    className="shrink-0 w-5 h-5 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 20 18">
                                    <path
                                        d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                            </Link>
                        </li>
                        <li>
                            <a href="#"
                               className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-300 group">
                                <svg
                                    className="shrink-0 w-5 h-5 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 18 20">
                                    <path
                                        d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-300 group">
                                <svg
                                    className="shrink-0 w-5 h-5 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 18 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-300 group">
                                <svg
                                    className="shrink-0 w-5 h-5 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                                    <path
                                        d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                                    <path
                                        d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <div>
                {tab === "dash" && <Dash/>}
                {tab === "profile" && <Profile/>}
                {tab === "posts" && <Post/>}
                {tab === "users" && <UsersDetails/>}
            </div>
        </div>
    );
}

export default DashboardLayout;