import { createSlice } from "@reduxjs/toolkit";

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subReddits: [],
        activeSubreddit: '/r/Home',
    },
    reducers: {
        addSubreddit: (state, action) => {
            state.subReddits.push(action.payload);
        },
        changeActiveSubreddit: (state, action) => {
            state.activeSubreddit = action.payload;
        },
    },

});

export const { addSubreddit, changeActiveSubreddit } = subredditsSlice.actions;

export const selectSubReddits = (state) => state.subreddits.subReddits;
export const selectActiveSubreddit = (state) => state.subreddits.activeSubreddit;

export default subredditsSlice.reducer;