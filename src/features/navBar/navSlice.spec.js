import ROUTES from '../../app/routes';
import navSliceReducer, {
    logNavSlice,
    addLink
} from './navSlice';

describe('navSlice Reducer', () => {
    const initialState = [
        {
            name: 'Featured',
            route: ROUTES.featuredRoute,
        },
        {
            name: 'SquaredCircle',
            route: ROUTES.squaredCircleRoute,
        },
        {
            name: 'Mildlyinfuriating',
            route: ROUTES.mildlyInfuriatingRoute,
        }
    ];

    const linkToAdd = {
        name: 'wellthatsucks',
        route: ROUTES.wellThatSucksRoute,
    };

    it('should handle intial state', () => {
        expect(navSliceReducer(undefined, {type: 'unknown'})).toEqual({
            links: [
                {
                name: 'Featured',
                route: ROUTES.featuredRoute,
                },
                {
                name: 'SquaredCircle',
                route: ROUTES.squaredCircleRoute,
                },
                {
                name: 'Mildlyinfuriating',
                route: ROUTES.mildlyInfuriatingRoute,
                }]
        });
    });

    it('should handle addLink', () => {
        expect(navSliceReducer(undefined, addLink(linkToAdd))).toEqual({
            links: [
                {
                    name: 'Featured',
                    route: ROUTES.featuredRoute,
                    },
                    {
                    name: 'SquaredCircle',
                    route: ROUTES.squaredCircleRoute,
                    },
                    {
                    name: 'Mildlyinfuriating',
                    route: ROUTES.mildlyInfuriatingRoute,
                    },
                    {
                        name: 'wellthatsucks',
                        route: ROUTES.wellThatSucksRoute,
                    }
                ]
        });
    });

});