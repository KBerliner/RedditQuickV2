import { configureStore } from "@reduxjs/toolkit";

// Importing Reducers
import postReducer from './features/post/postSlice';

export default configureStore({
    reducer: {
        posts: postReducer
    },
})