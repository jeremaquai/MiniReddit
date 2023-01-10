import searchSliceReducer, {
    changeActiveSearch,
} from "./searchSlice";

describe('searchSlice Reducer', () => {
    const initialState = '';
    it('should handle initial state', () => {
        expect(searchSliceReducer(undefined, {type: 'unknown'})).toEqual('');
    });
    it('should handle changeActiveSearch with an empty search State', () => {
        expect(searchSliceReducer(undefined, changeActiveSearch('hello'))).toEqual('hello');
    });
    it('should handle changeActiveSearch with an active search state', () => {
        expect(searchSliceReducer(initialState, changeActiveSearch('funny'))).toEqual('funny');
    });
});
    

