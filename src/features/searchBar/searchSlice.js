import { createSlice,  } from "@reduxjs/toolkit";



// Create searchSlice
const searchSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        changeActiveSearch: (state, action) => state = action.payload,
    },
});

export const { changeActiveSearch } = searchSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.searchResults.results)`

export const selectSearchTerm = (state) => state.search;

export default searchSlice.reducer;