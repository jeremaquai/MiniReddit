import ROUTES from "../app/routes";

export const NAVLINKS = [
     {
        name: 'Featured',
        url: '/featured',
        route: ROUTES.featuredRoute,
    },
     {
        name: 'SquaredCircle',
        url: '/SquaredCircle',
        route: ROUTES.squaredCircleRoute,
    },
     {
        name: 'MildlyInfuriating',
        url: '/',
        route: ROUTES.mildlyInfuriatingRoute,
    }
];