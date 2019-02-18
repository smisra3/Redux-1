import React, {Component} from 'react';
import '../../styles/main.css';
import { Link } from "react-router-dom";
import axios from 'axios';

class Login extends Component {

    state = {
        error : false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const config = {
            headers: {'Authorization':  token}
        };
        const email = document.getElementById("email").value;
        const pass = document.getElementById("password").value;
/*        localStorage.setItem("email", email);
        localStorage.setItem("password", pass);*/
        const token = config;
        const body = {
            "email" : email,
            "password" : pass,
            "strategy": "local"
        };

        axios.post('http://52.213.25.226:3030/authentication/',body)
            .then( res => {
                const tokenPersonal = res.data.accessToken;
                localStorage.setItem("token", tokenPersonal);
                if(res.status === 201){
                    this.props.history.push('/teams')
                }
            }).catch(e => {
            if(e.response){
                console.log(e.response.data.message);
            }
        });
    };

    render() {
        const { error } = this.state;
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
                        <button className="btn btn-primary">Login</button>
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
                {error ? <div className="font-weight-bold alert alert-danger text-center mt-4">
                    Invalid Login
                </div> : '' }
            </div>
        );
    }
}

export default Login;