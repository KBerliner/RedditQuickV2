import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadAllSubreddits = createAsyncThunk(
    'subreddits/loadAllSubreddits',
    async () => {
        const response = await fetch('https://api.reddit.com/subreddits?raw_json=1');

        const json = await response.json();
        return json;
    }
)

export const subredditSlice = createSlice({
    name: 'subreddits',
    initialState: {
        isLoading: false,
        hasError: false,
        subreddits: []
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadAllSubreddits.pending, (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        })
        .addCase(loadAllSubreddits.fulfilled, (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.subreddits = action.payload.data.children.map(subreddit => subreddit.data);
        })
        .addCase(loadAllSubreddits.rejected, (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        })
    }
});

export const { loadSubreddits } = subredditSlice.actions;
export const selectSubreddits = (state) => state.subreddits.subreddits;

export default subredditSlice.reducer;