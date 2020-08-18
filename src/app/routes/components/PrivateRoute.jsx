import React from "react";
import { Redirect, Route, useLocation, matchPath } from "react-router-dom";
import TokenService from "../../../services/tokenService";
import OutletRoutes from "../outlet";
import MerchantRoutes from "../merchant";

const PrivateRoute = ({ component: Component, ...rest }) => {

    const location = useLocation();

    const renderWithAuth = (props) => {
        const isLogin = TokenService.isAuthenticated();

        if (!isLogin) {
            return (
                <Redirect to="/account/login" />
            );
        }

        if (!isRouteAccessibleByScope()) {
            return (
                <Redirect to="/dashboard" />
            );
        }

        return <Component {...props} />
    };

    const isRouteAccessibleByScope = () => {

        const currentPath = location.pathname;

        const combineRoutes = OutletRoutes.concat(MerchantRoutes)
            .map(item => item.path);

        const isRouteMatch = combineRoutes
            .find(path => matchPath(currentPath, path));

        return !isRouteMatch ? false : true;
    }

    return (
        <Route {...rest} render={renderWithAuth} />
    )
};

export default PrivateRoute;

