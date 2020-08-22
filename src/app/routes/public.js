import HomePage from "../views/pages/Home";
import TestPage from "../views/pages/Test";
import LoginPage from "../views/pages/Login";

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
}];

export default PublicRoutes;