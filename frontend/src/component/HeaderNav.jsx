import React from 'react';
import {NavLink} from "react-router-dom";
import '../styles/header.css';

const HeaderNav = () => {
        return (
            <div id="headerNav">
                <NavLink id="nav" to="/Teams">Teams</NavLink>
                <NavLink id="nav" to="/Ideas">Ideas</NavLink>
                <NavLink id="nav" to="/Cities">Cities</NavLink>
                <NavLink id="nav" to="/Users">Users</NavLink>
            </div>
        );
};

export default HeaderNav;