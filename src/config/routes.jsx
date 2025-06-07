import HomePage from '@pages/Home';
import SignInPage from '@pages/SignIn';
import AboutPage from '../pages/About';


export const routes = [
    {
        id: 'Home',
        path: '/',
        element: <HomePage />,
        label: 'HOME',
        activeStyle: false,
        navType: 'navlink',
    },
    {
        id: 'About',
        path: '/about',
        element: <AboutPage />,
        label: 'ABOUT',
        activeStyle: false,
        navType: 'navlink',
    },
    {
        id: 'SignIn',
        path: '/sign-in',
        element: <SignInPage />,
        label: 'Sign In',
        activeStyle: true,
        navType: 'navbutton',
    },
];

export default routes;