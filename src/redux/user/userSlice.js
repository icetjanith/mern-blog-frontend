import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        loading: false,
        error: null,
        avatarPopUp: false,
    },
    reducers: {
        signInStart:(state)=>{
            state.loading = true;
            state.error = null;
        },
        signInSuccess:(state, action)=>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        signInEnd:(state)=>{
            state.loading = false;
        },
        avatarPopUpFunction:(state)=>{
            state.avatarPopUp = !state.avatarPopUp;
        }
    }
});

export const {signInStart, signInSuccess, signInFailure, signInEnd, avatarPopUpFunction} = userSlice.actions;
export default userSlice.reducer;