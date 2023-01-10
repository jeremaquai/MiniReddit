import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        changePosts: (state, action) => state = action.payload
    }
});

export const  selectPosts  = (state) => state.posts;
export const { changePosts } = postsSlice.actions;

 

export default postsSlice.reducer;