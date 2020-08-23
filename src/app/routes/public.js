import HomePage from "../views/pages/Home";
import TestPage from "../views/pages/Test";
import LoginPage from "../views/pages/Login";
import ScrollPage from "../views/pages/Scroll";

const PublicRoutes = [{
    path: '/',
    exact: true,
    label: 'Home Page',
    component: HomePage
}, {
    path: '/test',
    label: 'Test Page',
    component: TestPage
}, {
    path: '/login',
    label: 'Login Page',
    component: LoginPage
}, {
    path: '/scroll',
    label: 'Scroll Page',
    component: ScrollPage
}];

export default PublicRoutes;