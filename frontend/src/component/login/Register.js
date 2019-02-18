import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

class Register extends Component {

    state = {
        name: '',
        lastname: '',
        email:'',
        password:'',
        submitted: false
    };

    handleChange = (e) => {
        const {value,name} = e.target;
        this.setState({
            [name] : value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, lastname, email, password } = this.state;

        if(name === '' || lastname === '' || email === '' || password === ''){
            this.setState({submitted:true});
            return;
        }
        this.setState({submitted:false});
        const register = {
            email,
            password
        };
        //Registro en API
        axios.post(`http://52.213.25.226:3030/auth-users/`, register)
            .then( res => {
                if(res.status === 201){
                    this.props.history.push('/')
                }
            })
            .catch(e => {
                if(e.response){
                    console.log(e.response.data.message);
                }
            });
    };

    render() {
        const { submitted } = this.state;
        return (
            <div className="d-flex justify-content-center">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Register</h2>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className={'form-group'}>
                            <label>First Name</label>
                            <input type="text" className="form-control" name="name" onChange={this.handleChange} />
                        </div>
                        <div className={'form-group'}>
                            <label>Last Name</label>
                            <input type="text" className="form-control" name="lastname" onChange={this.handleChange} />
                        </div>
                        <div className={'form-group'}>
                            <label>Email</label>
                            <input type="email" className="form-control" name="email" onChange={this.handleChange} />
                        </div>
                        <div className={'form-group'}>
                            <label>Password</label>
                            <input type="password" className="form-control" name="password" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Register</button>
                            <Link to="/" className="btn btn-link">Cancel</Link>
                        </div>
                    </form>
                    {submitted ? <div className="font-weight-bold alert alert-danger text-center mt-4">
                        All fields are mandatory.
                    </div> : '' }
                </div>
            </div>
        );
    }
}

export default Register;