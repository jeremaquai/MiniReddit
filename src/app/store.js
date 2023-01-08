import { configureStore } from '@reduxjs/toolkit';
import searchSliceReducer from '../features/searchBar/searchSlice';
import navSliceReducer from '../features/navBar/navSlice';


export const store = configureStore({
  reducer: {
    search: searchSliceReducer,
    nav: navSliceReducer,
  },
});
