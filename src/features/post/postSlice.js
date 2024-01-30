import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import falseData from '../../falseData';

export const loadAllPosts = createAsyncThunk(
    'posts/loadAllPosts',
    async () => {
        const response = await fetch('https://api.reddit.com/r/popular?raw_json=1');

        const json = await response.json();
        return json;
    }
)

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        hasError: false,
        posts: []
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadAllPosts.pending, (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        })
        .addCase(loadAllPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.posts = action.payload.data.children.map(post => post.data);
        })
        .addCase(loadAllPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        })
    }
});

export const { loadPosts } = postSlice.actions;
export const selectPosts = (state) => state.posts.posts;

export default postSlice.reducer;