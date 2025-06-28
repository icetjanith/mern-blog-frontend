import {_get, _post} from "../../utills/api.js";
import {signInSuccess, signOut} from "../../redux/user/userSlice.js";
import axios from "axios";

export const verifyAuthUser = async (dispatch) => {
    try {
        const response = await axios.post(
            "http://localhost:3006/api/auth/verify-auth",
            {},
            { withCredentials: true }
        );
        console.log(response.data);
        // dispatch(signInSuccess(response.data)); // adjust to match actual structure
    } catch (error) {
        console.error("Verification failed:", error.message);
        dispatch(signOut());
    }
};
