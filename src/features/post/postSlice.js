import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        loadPosts: (state, action) => {
           return {
            ...state,
            posts: action.payload
           }
        }
    }
});

export const { loadPosts } = postSlice.actions;
export const selectPosts = (state) => state.posts;

export default postSlice.reducer;