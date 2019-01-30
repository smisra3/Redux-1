import React, {Component} from 'react';
import validator from 'validator';
import PropTypes from 'prop-types';

class AddUserForm extends Component {

    state = {
        name :'',
        username : '',
        role : '',
        email :''
    };

    /*Optimizar funciones repetidas*/
    onChangeName = (e) => {
        const value = e.target.value;
        this.setState((prevState) => {
            //name = state.name
            prevState.name = value;
            return prevState;
        })
    };
    onChangeSurName = (e) => {
        const value = e.target.value;
        this.setState((prevState) => {
            //username = state.username
            prevState.username = value;
            return prevState;
        })
    };
    onChangeRole = (e) => {
        const value = e.target.value;
        this.setState((prevState) => {
            //username = state.username
            prevState.role = value;
            return prevState;
        })
    };
    onChangeEmail = (e) => {
        const value = e.target.value;
        this.setState((prevState) => {
            //email = state.email
            prevState.email = value;
            return prevState;
        })
    };
    onSubmitForm = (e) => {
      e.preventDefault();
        const {isEmail,isPhone} = require('validator');
        if(isEmail(this.state.email)){
            prompt("Valida");
            this.props.addUserForm(this.state.name, this.state.username, this.state.role,this.state.email);
        }
        else{
            prompt("No es email valido")
        }
    };

    render() {

        let formStyle = {
            backgroundColor : 'lightBlue',
            position: 'absolute',
            left: '0',
            right: '0',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
        };

        return (
                <form id="formularioId" style={formStyle} onSubmit={this.onSubmitForm}>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label className="col-sm-2 col-form-label">Name</label>
                            <input type="text"
                                   name="inputName"
                                   className="form-control"
                                   placeholder="User name"
                                   value={this.state.name}
                                   onChange={this.onChangeName}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label className="col-sm-2 col-form-label">Headquarter</label>
                            <select id="inputState" className="form-control">
                                <option>Madrid</option>
                                <option>Barcelona</option>
                                <option>Valencia</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label  className="col-sm-2 col-form-label">Surname</label>
                            <input type="text"
                                   value={this.state.username}
                                   className="form-control"
                                   onChange={this.onChangeSurName}
                                   placeholder="Last name"/>
                        </div>
                        <div className="form-group col-md-4">
                            <label  className="col-sm-2 col-form-label">Role</label>
                            <select id="inputState" className="form-control" onChange={this.onChangeRole}>
                                <option>Founder</option>
                                <option>CTO</option>
                                <option>CMO</option>
                                <option>SEO</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <label className="col-sm-2 col-form-label">Email</label>
                        </div>
                        <div className="form-group col-md-4">
                            <input type="email"
                                   className="form-control"
                                   placeholder="Email"
                                   onChange={this.onChangeEmail}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <label  className="col-sm-2 col-form-label">Phone</label>
                        </div>
                        <div className="form-group col-md-4">
                            <input type="text" className="form-control" placeholder="Phone number"/>
                        </div>
                        <div className="form-group offset-1 col-md-3">
                            <button type="submit" className="btn btn-primary">Create</button>
                        </div>
                    </div>
                </form>
        );
    }
}


export default AddUserForm;