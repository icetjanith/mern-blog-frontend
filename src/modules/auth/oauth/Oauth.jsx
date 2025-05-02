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
                className="w-full bg-gray-700 flex items-center cursor-pointer justify-center py-2 rounded mb-2">
                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5 mr-2"/> Sign up
                with Google
            </button>
        </div>
    );
}

export default Oauth;