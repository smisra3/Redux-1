import React, {Component} from 'react';
import '../styles/Style.css';

class Header extends Component {
    render() {

        let headerStyle = {
            margin : '20px'
        };

        return (
            <div style={headerStyle}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Teams</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ideas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cities</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Users</a>
                            </li>
                        </ul>
                </nav>
            </div>
        );
    }
}

export default Header;