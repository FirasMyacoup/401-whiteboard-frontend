import { createSlice } from "@reduxjs/toolkit";

const firstState = {
posts: [],
loading: false,
error: null,
};

const postslice = createSlice({
name: "post",
firstState,
reducers: {
getPosts: (state, action) => {
    state.posts = action.payload;
}
}
});

export const { getPosts } = postslice.actions;

export default postslice.reducer;