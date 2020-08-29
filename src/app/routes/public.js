import IndexPage from "../views/pages/Index"
import SeeYouSoonPage from "../views/pages/public/SeeYouSoon"
import ScrollPage from "../views/pages/Scroll"

const PublicRoutes = [{
    path: '/',
    exact: true,
    label: 'Index Page',
    component: IndexPage
}, {
    path: '/see-you',
    label: 'See You Soon Page',
    component: SeeYouSoonPage
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