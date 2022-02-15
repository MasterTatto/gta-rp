import React from 'react';
import {
    Routes,
    Route
} from "react-router-dom";
import Welcome from "../pages/rp1-welcome";
import Login from "../pages/rp2-auth/login";

const Routers = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Welcome/>}/>
            <Route path={'/login'} element={<Login/>}/>
        </Routes>
    );
};

export default Routers;
