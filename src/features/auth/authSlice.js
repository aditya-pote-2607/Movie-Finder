import { createSlice } from "@reduxjs/toolkit";

const users = JSON.parse(localStorage.getItem("users")) || [];

const initialState = {
    user:null,
    isLoggedIn:false,

};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        signup: (state, action) => {
           state.user =action.payload
            state.isLoggedIn =true;
        },


        login: (state, action) => {
            const { email, password } = action.payload;

            const user = state.users.find(
                (item) =>
                    item.email === email &&
                    item.password === password
            );


            if (user) {
                state.user = user;

                localStorage.setItem(
                    "currentUser",
                    JSON.stringify(user)
                );
            }
        },


        logout: (state) => {
            state.user = null;
            localStorage.removeItem("currentUser");
        }

    }
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;