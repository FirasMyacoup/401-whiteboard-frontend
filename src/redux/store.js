import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slicer";
import postslice from "./postSlicer";

export default configureStore({
    reducer: {
        auth: authSlice,
        post: postslice,
    },
});
