import React from 'react';
import {NavLink} from "react-router-dom";
import '../styles/main.css';

const HeaderNav = () => {
        return (
            <div id="headerNav" className="container-fluid navbar mr-2 justify-content-end">
                <NavLink id="nav" to="/Teams">Teams</NavLink>
                <NavLink id="nav" to="/Ideas">Ideas</NavLink>
                <NavLink id="nav" to="/Cities">Cities</NavLink>
                <NavLink id="nav" to="/Users">Users</NavLink>
            </div>
        );
};

export default HeaderNav;