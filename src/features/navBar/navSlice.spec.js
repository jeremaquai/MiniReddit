import navSliceReducer, {
    logNavSlice,
    addLink
} from './navSlice';

describe('navSlice Reducer', () => {
    const initialState = [
        {
            name: 'Featured',
            id: 'Featured'
        },
        {
            name: 'SquaredCircle',
            id: 'SquaredCircle',
        },
        {id: 'Mildlyinfuriating'}
    ];

    const linkToAdd = {
        name: 'wellthatsucks',
        id: 'wellthatsucks',
    }

    it('should handle intial state', () => {
        expect(navSliceReducer(undefined, {type: 'unknown'})).toEqual({
            links: [
                {
                name: 'Featured',
                id: 'Featured'
                },
                {
                name: 'SquaredCircle',
                id: 'SquaredCircle',
                },
                {
                name: 'Mildlyinfuriating',
                id: 'Mildlyinfuriating'
                }]
        });
    });

    it('should handle addLink', () => {
        expect(navSliceReducer(undefined, addLink(linkToAdd))).toEqual({
            links: [
                {
                name: 'Featured',
                id: 'Featured'
                },
                {
                name: 'SquaredCircle',
                id: 'SquaredCircle',
                },
                {
                name: 'Mildlyinfuriating',
                id: 'Mildlyinfuriating'
                },
                {
                name: 'wellthatsucks',
                id: 'wellthatsucks'
                }]
        });
    });

});