import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slicer";

export default configureStore({
    reducer: {
        auth: authSlice,
    },
});
