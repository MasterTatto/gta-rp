import React from 'react';
import {
    Routes,
    Route
} from "react-router-dom";
import Welcome from "../pages/rp1-welcome";
import AuthContainer from "../pages/rp2-auth/authContainer";

const Routers = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Welcome/>}/>
            <Route path={'/login'} element={<AuthContainer/>}/>
        </Routes>
    );
};

export default Routers;
