import React from 'react';
import {NavLink} from "react-router-dom";

const headerStyle = {
    backgroundColor : 'lightBlue',
    padding : '15px',
    margin: '20px'
};
const navLinkStyle = {
    margin : '10px'
};

const HeaderNav = () => {
        return (
            <div id="headerNav" style={headerStyle}>
                <NavLink style={navLinkStyle} to="/Teams">Teams</NavLink>
                <NavLink style={navLinkStyle} to="/Ideas">Ideas</NavLink>
                <NavLink style={navLinkStyle} to="/Cities">Cities</NavLink>
                <NavLink style={navLinkStyle} to="/Users">Users</NavLink>
            </div>
        );
};

export default HeaderNav;