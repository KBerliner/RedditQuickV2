import { configureStore } from "@reduxjs/toolkit";

// Importing Reducers
import postReducer from './features/post/postSlice';
import subredditReducer from './features/subreddit/subredditSlice';

export default configureStore({
    reducer: {
        posts: postReducer,
        subreddits: subredditReducer
    },
})