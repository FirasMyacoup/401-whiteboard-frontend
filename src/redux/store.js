import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slicer";
import postSlice from "./postSlicer";

export default configureStore({
    reducer: {
        auth: authSlice,
        post: postSlice,
    },
});
