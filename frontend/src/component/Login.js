import React, {Component} from 'react';
import '../styles/main.css';
import {addUser} from "../redux/actions/userAction";
import axios from 'axios';
import request from 'request-promise';

class Login extends Component {

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
        const answer = axios.post('http://52.213.25.226:3030/authentication/',body).then(res => {
            const tokenPersonal = res.data.accessToken;
            localStorage.setItem("token", tokenPersonal);
            if (res.status == 201 ) {
                this.props.history.push('/teams')
            }
        })
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
     /*
           const rq = {
          method:"POST",
          uri: '/auth-users',
          json:true
      };
           request(rq)
          .then(function (data) {
              console.log(data);
          })
          .catch(function (err) {
              console.log(err);
          }) */