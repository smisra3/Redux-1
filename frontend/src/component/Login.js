import React, {Component} from 'react';
import '../styles/login.css';
import {addUser} from "../redux/actions/userAction";

class Login extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const pass = document.getElementById("password").value;
        this.props.validarLogin()
    };

    render() {

        return (
            <div id="login-form">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="text-center">Log in</h2>
                    <div className="form-group">
                        <input id="email" type="text" className="form-control" placeholder="Email" required="required"/>
                    </div>
                    <div className="form-group">
                        <input id="password" type="password" className="form-control" placeholder="Password" required="required"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">Log in</button>
                    </div>
                    <div className="clearfix">
                        <a href="#" className="pull-right">Forgot Password?</a>
                    </div>
                </form>
                <p className="text-center"><a href="#">Create an Account</a></p>
            </div>
        );
    }
}

export default Login;