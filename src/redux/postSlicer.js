import { createSlice } from "@reduxjs/toolkit";

const initialState = {
posts: [],
loading: false,
error: null,
};

const postSlice = createSlice({
name: "post",
initialState,
reducers: {
getPosts: (state, action) => {
    state.posts = action.payload;
}
}
});

export const { getPosts } = postSlice.actions;

export default postSlice.reducer;