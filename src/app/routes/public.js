import HomePage from "../views/pages/Home";
import TestPage from "../views/pages/Test";

const PublicRoutes = [{
    path: '/',
    exact: true,
    label: 'Home Page',
    component: HomePage
}, {
    path: '/test',
    label: 'Test Page',
    component: TestPage
}];

export default PublicRoutes;