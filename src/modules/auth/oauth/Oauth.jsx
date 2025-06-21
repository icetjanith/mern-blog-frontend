import React from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '/src/firebase.js';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '/src/redux/user/userSlice.js';
import { useNavigate } from 'react-router-dom';
import {_post} from "../../../utills/api.js";

function Oauth() {

    const auth = getAuth(app);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleClick = async (e) => {
        e.preventDefault();
        console.log("Google");
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' })
        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider);
            console.log(resultsFromGoogle.user);
            let data = {
                name: resultsFromGoogle.user.displayName,
                email: resultsFromGoogle.user.email,
                googlePhoto: resultsFromGoogle.user.photoURL,
            }
            console.log(data);
            let res = await _post({
                endpointUrl: "/api/auth/google",
                payload: data,
                callback: (res) => console.log(res),
                errcallback: (e) => console.log(e)
            })
            dispatch(signInSuccess(res.data));
            navigate('/');
        }catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <button
                onClick={handleGoogleClick}
                type="button"
                className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.613 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 15.28 0 12.48 0 5.868 0 .252 5.387.252 12s5.616 12 12.228 12c3.168 0 5.948-1.047 7.933-3.027 2.04-2.04 2.68-4.94 2.68-7.273 0-.72-.053-1.387-.16-1.947H12.48z"/>
                </svg>
                Google
            </button>
        </div>
    );
}

export default Oauth;