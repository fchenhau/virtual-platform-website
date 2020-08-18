import React from "react";
import { Route } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {

    const renderWithAuth = (props) => {
        return <Component {...props} />
    };


    return (
        <Route {...rest} render={renderWithAuth} />
    )
}

export default PublicRoute;