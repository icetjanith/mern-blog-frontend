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
        signOut:(state)=>{
            state.currentUser = null;
        },
        avatarPopUpFunction:(state, action)=>{
            state.avatarPopUp = action.payload;
        }
    }
});

export const {signInStart, signInSuccess, signInFailure, signInEnd, signOut, avatarPopUpFunction} = userSlice.actions;
export default userSlice.reducer;