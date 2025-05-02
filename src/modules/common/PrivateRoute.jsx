import React from 'react';
import {useSelector} from "react-redux";
import {Outlet,Navigate} from "react-router-dom";

function PrivateRoute() {
    const authenticated = useSelector((state) => state.user.currentUser);
    return authenticated ? <Outlet/>:<Navigate to="/auth/login"/>;
}

export default PrivateRoute;