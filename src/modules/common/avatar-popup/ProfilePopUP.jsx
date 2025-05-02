import React, {useEffect, useRef} from 'react';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./avatarpopup.css";
import {avatarPopUpFunction} from "../../../redux/user/userSlice.js";

function ProfilePopUp() {

    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.user.avatarPopUp);
    const popupRef = useRef(null);

    const {currentUser} = useSelector((state) => state.user);
    const truncatedEmail = currentUser.user.email.length > 20 ? currentUser.user.email.slice(0, 20)+"..." : currentUser.user.email;

    return (
        <div className="main">
            <div className="absolute top-14 z-20 right-1 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-sm shadow-sm dark:bg-gray-700 dark:divide-gray-600">
                <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                        Neil Sims
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                       role="none">
                        {truncatedEmail}
                    </p>
                </div>
                <ul className="py-1" role="none">
                    <li>
                        <Link to="dashboard?tab=dash">
                            <div
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem">Dashboard</div>
                        </Link>
                    </li>
                    <li>
                        <div
                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                           role="menuitem">Settings</div>
                    </li>
                    <li>
                        <div
                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                           role="menuitem">Earnings</div>
                    </li>
                    <li>
                        <div
                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                           role="menuitem">Sign out</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProfilePopUp;