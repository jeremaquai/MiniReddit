import { createSlice, current } from "@reduxjs/toolkit";

// Create initialState for searchResultsSlice
const initialState = {
    searchTerm: null,
    searchResults: {},
};

// Create searchResultsSlice
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        logSearchSlice(state) {
            console.log(state);
        },
        logSearchResults(state) {
            console.log(current(state.searchResults))
        },
        addSearchResults(state, action) {
            state.searchResults = action.payload;
        },
        addSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
    },
});

export const { logSearchSlice,logSearchResults, addSearchResults, addSearchTerm } = searchSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.searchResults.results)`
export const selectResults = (state) => state.search.searchResults;
export const selectTerm = (state) => state.search.searchTerm;

export default searchSlice.reducer;