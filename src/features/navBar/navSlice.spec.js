import ROUTES from '../../app/routes';
import navSliceReducer, {
    logNavSlice,
    addLink
} from './navSlice';

describe('navSlice Reducer', () => {
    const initialState = [
        {
            name: 'Featured',
            url: '/featured',
            route: ROUTES.featuredRoute,
        },
         {
            name: 'SquaredCircle',
            url: '/',
            route: ROUTES.squaredCircleRoute,
        },
         {
            name: 'MildlyInfuriating',
            url: '/',
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
                    url: '/featured',
                    route: ROUTES.featuredRoute,
                },
                 {
                    name: 'SquaredCircle',
                    url: '/',
                    route: ROUTES.squaredCircleRoute,
                },
                 {
                    name: 'MildlyInfuriating',
                    url: '/',
                    route: ROUTES.mildlyInfuriatingRoute,
                }]
        });
    });

    it('should handle addLink', () => {
        expect(navSliceReducer(undefined, addLink(linkToAdd))).toEqual({
            links: [
                    {
                        name: 'Featured',
                        url: '/featured',
                        route: ROUTES.featuredRoute,
                    },
                    {
                        name: 'SquaredCircle',
                        url: '/',
                        route: ROUTES.squaredCircleRoute,
                    },
                    {
                        name: 'MildlyInfuriating',
                        url: '/',
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