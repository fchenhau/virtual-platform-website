import React, { Fragment, useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import PublicRoutes from "./public";

import { withRouter } from "react-router";
import { compose } from "redux";
import { connect } from "react-redux";

const Routes = () => {
    const [publicRoutes, setPublicRoutes] = useState([]);

    useEffect(() => {
        renderPublicRoutes();
    }, []);

    const renderPublicRoutes = () => {
        let rootRoutes = Array.prototype.concat(
            PublicRoutes
        );

        const publicRoutes = rootRoutes.map((route, index) => (
            <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.component}
            />
        ));

        setPublicRoutes(publicRoutes);
    };

    return (
        <Fragment>
            <Switch>
                {publicRoutes}
            </Switch>

        </Fragment>
    )
}

const enhance = compose(
    withRouter
);

export default enhance(Routes);