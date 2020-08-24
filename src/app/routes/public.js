import IndexPage from "../views/pages/Index"
import HomePage from "../views/pages/Home"
import TestPage from "../views/pages/Test"
import LoginPage from "../views/pages/Login"
import ScrollPage from "../views/pages/Scroll"

const PublicRoutes = [{
    path: '/',
    exact: true,
    label: 'Index Page',
    component: IndexPage
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
}, {
    path: '/menu',
    label: 'Menu Page',
    component: () => { 
        window.location.href = 'http://localhost:8080/index.html';
        return null;
    }
}];

export default PublicRoutes;