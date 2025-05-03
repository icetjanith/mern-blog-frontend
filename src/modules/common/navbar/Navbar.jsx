import React, { useState, useEffect } from 'react';
import './navbar.css';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ProfilePopUP from "../avatar-popup/ProfilePopUP.jsx";
import { avatarPopUpFunction } from "../../../redux/user/userSlice.js";
import { setTheme } from "../../../redux/theme/themeSlice.js";

function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const open = useSelector((state) => state.user.avatarPopUp);
    const { theme } = useSelector((state) => state.theme);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check screen size
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    const avatarPopUpBtn = () => {
        dispatch(avatarPopUpFunction());
    };

    const setThemeColor = () => {
        dispatch(setTheme());
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className={`navbar flex justify-between w-full shadow-md items-center p-3 ${theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-white text-gray-800'}`}>
                {/* Brand Logo */}
                <div className="navbar-brand text-xl font-bold flex items-center">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-1 rounded-lg text-white">
                        Janith's
                    </span>
                    <span className="ml-2">
                        Blog
                    </span>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden z-50">
                    <button
                        onClick={toggleMenu}
                        className="p-2 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Search Bar - Hidden on mobile */}
                <div className="hidden md:block relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className={`border-2 px-4 py-2 rounded-lg focus:outline-none focus:ring w-60 ${theme === 'dark' ? 'bg-slate-800 border-slate-700 text-slate-100' : 'bg-white border-gray-300'}`}
                    />
                    <FaSearch className="absolute right-3 top-3" />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center">
                    <ul className="flex font-semibold mr-4">
                        <NavLink to="/" className={({isActive}) => `m-4 font-bold ${isActive ? 'text-purple-500' : ''}`}>Home</NavLink>
                        <NavLink to="/products" className={({isActive}) => `m-4 ${isActive ? 'text-purple-500' : ''}`}>Posts</NavLink>
                        <NavLink to="/about" className={({isActive}) => `m-4 ${isActive ? 'text-purple-500' : ''}`}>About</NavLink>
                    </ul>

                    <button
                        className={`mx-3 p-2 rounded-full hover:cursor-pointer transition-colors ${
                            theme === "light"
                                ? "bg-gray-200 hover:bg-gray-300 border-2 border-gray-300"
                                : "border-2 border-slate-700 hover:bg-slate-700"
                        }`}
                        onClick={setThemeColor}
                        aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
                    >
                        {theme === "light" ? <FaMoon /> : <FaSun className="text-yellow-300" />}
                    </button>

                    {currentUser ? (
                        <div onClick={avatarPopUpBtn}>
                            <img
                                className="mx-3 w-10 h-10 rounded-full cursor-pointer border-2 border-purple-500"
                                src={currentUser.user.profilePicture}
                                alt="Profile"
                            />
                        </div>
                    ) : (
                        <div className="flex">
                            <button
                                className="mx-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-80 text-white font-bold py-2 px-4 rounded transition-opacity"
                                onClick={() => navigate("/auth/login")}
                            >
                                LOGIN
                            </button>
                            <button
                                className="mx-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-80 text-white font-bold py-2 px-4 rounded transition-opacity"
                                onClick={() => navigate("/auth/signup")}
                            >
                                SIGNUP
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Menu Sidebar */}
            <div className={`fixed top-0 left-0 w-64 h-full z-40 transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } ${theme === 'dark' ? 'bg-slate-800 text-slate-100' : 'bg-white text-gray-800'} shadow-lg md:hidden`}>
                <div className="p-5">
                    <div className="flex justify-between items-center mb-8">
                        <div className="text-xl font-bold">
                            <span className="bg-gradient-to-r from-purple-500 to-blue-500 px-2 py-1 rounded-lg text-white">
                                Janith's
                            </span>
                            <span className="ml-1">Blog</span>
                        </div>
                        <button onClick={toggleMenu} className="p-2">
                            <FaTimes size={20} />
                        </button>
                    </div>

                    {/* Mobile Search */}
                    <div className="relative mb-6">
                        <input
                            type="text"
                            placeholder="Search..."
                            className={`border-2 px-4 py-2 rounded-lg focus:outline-none focus:ring w-full ${
                                theme === 'dark' ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-300'
                            }`}
                        />
                        <FaSearch className="absolute right-3 top-3" />
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="flex flex-col">
                        <NavLink
                            to="/"
                            className={({isActive}) => `py-3 px-2 border-b border-gray-200 font-bold ${isActive ? 'text-purple-500' : ''}`}
                            onClick={toggleMenu}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={({isActive}) => `py-3 px-2 border-b border-gray-200 ${isActive ? 'text-purple-500' : ''}`}
                            onClick={toggleMenu}
                        >
                            Projects
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({isActive}) => `py-3 px-2 border-b border-gray-200 ${isActive ? 'text-purple-500' : ''}`}
                            onClick={toggleMenu}
                        >
                            About
                        </NavLink>
                    </div>

                    {/* Mobile Theme Toggle & Login */}
                    <div className="mt-6">
                        <div className="flex items-center justify-between mb-4">
                            <span>Theme</span>
                            <button
                                className={`p-2 rounded-full ${
                                    theme === "light"
                                        ? "bg-gray-200 hover:bg-gray-300"
                                        : "bg-slate-700 hover:bg-slate-600"
                                }`}
                                onClick={setThemeColor}
                            >
                                {theme === "light" ? <FaMoon /> : <FaSun className="text-yellow-300" />}
                            </button>
                        </div>

                        {currentUser ? (
                            <div className="flex items-center mt-4" onClick={() => {
                                avatarPopUpBtn();
                                toggleMenu();
                            }}>
                                <img
                                    className="w-10 h-10 rounded-full cursor-pointer border-2 border-purple-500"
                                    src={currentUser.user.profilePicture}
                                    alt="Profile"
                                />
                                <span className="ml-3">My Profile</span>
                            </div>
                        ) : (
                            <div className="flex flex-col mt-4">
                                <button
                                    className="mb-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-80 text-white font-bold py-2 px-4 rounded w-full"
                                    onClick={() => {
                                        navigate("/auth/login");
                                        toggleMenu();
                                    }}
                                >
                                    LOGIN
                                </button>
                                <button
                                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-80 text-white font-bold py-2 px-4 rounded w-full"
                                    onClick={() => {
                                        navigate("/auth/signup");
                                        toggleMenu();
                                    }}
                                >
                                    SIGNUP
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Overlay when mobile menu is open */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={toggleMenu}
                ></div>
            )}

            {/* Profile Popup */}
            <div>{open ? (<ProfilePopUP/>) : ("")}</div>
        </div>
    );
}

export default Navbar;