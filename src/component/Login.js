import React, {Component} from 'react';
import '../styles/login.css';

class Login extends Component {
    render() {
        return (
            <div id="login-form">
                <form>
                    <h2 className="text-center">Log in</h2>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username" required="required"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" required="required"/>
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