import ROUTES from "../app/routes";

export const NAVLINKS = [
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