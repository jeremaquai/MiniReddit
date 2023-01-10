import { configureStore } from '@reduxjs/toolkit';
import searchSliceReducer from '../features/searchBar/searchSlice';



export const store = configureStore({
  reducer: {
    search: searchSliceReducer,
    
  },
});
