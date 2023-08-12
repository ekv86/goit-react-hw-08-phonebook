import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./authThunk";



const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const handleRegisterFulfilled = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
}

const handleLogOutFulfilled = (state) => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
}

const handleRefreshFulfilled = (state, action) => {
    state.user = action.payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, handleRegisterFulfilled)
            .addCase(logIn.fulfilled, handleRegisterFulfilled)
            .addCase(logOut.fulfilled, handleLogOutFulfilled)
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, handleRefreshFulfilled)
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
            })
    },
});

export const authReducer = authSlice.reducer;