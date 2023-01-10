import { configureStore } from '@reduxjs/toolkit';
import searchSliceReducer from '../features/searchBar/searchSlice';
import subredditsSlice from '../features/subreddits/subredditsSlice';
import postsSlice from '../features/posts/postsSlice';


export const store = configureStore({
  reducer: {
    search: searchSliceReducer,
    subreddits: subredditsSlice,
    posts: postsSlice,
    
  },
});
