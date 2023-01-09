import searchSliceReducer, {
    logSearchSlice,
    logSearchResults,
    addSearchResults,
    addSearchTerm

} from "./searchSlice";

describe('searchSlice Reducer', () => {
    const initialState = {
        searchTerm: 'foxy',
        searchResults: {
            result: {id: 1,
            result: 'funny'},
            result: {id:2,
            result: 'funnier'}

        }
    };
    it('should handle initial state', () => {
        expect(searchSliceReducer(undefined, {type: 'unknown'})).toEqual({
            searchTerm: {},
            searchResults: {}
        });
    });
    it('should handle addSearchTerm with an empty searchTerm State', () => {
        expect(searchSliceReducer(undefined, addSearchTerm('hello'))).toEqual({
            searchTerm: 'hello',
            searchResults: {},
        });
    });
    it('should handle addSearchTerm ', () => {
        expect(searchSliceReducer(initialState, addSearchTerm('funny'))).toEqual({
            searchTerm: 'funny',
            searchResults: {
                result: {id: 1,
                    result: 'funny'},
                    result: {id:2,
                    result: 'funnier'}
            }
        });
    });
    it('should handle addSearchResults', () => {
        expect(searchSliceReducer(initialState, addSearchResults({id: 1, result: 'funny'}))).toEqual({
            searchTerm: "foxy",
            searchResults: {id: 1, result: 'funny'}
        });
    });
});