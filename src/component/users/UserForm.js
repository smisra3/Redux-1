import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addUser } from "../../redux/actions/userAction";
import '../../styles/form.css';

class UserForm extends Component {

    state = {
        name: '',
        surname: '',
        error: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, surname } = this.state;

        if(name === '' || surname === ''){
            this.setState({error:true});
            return;
        }
        this.setState({error:false});

        const newUser = {
            name,
            surname
        };

        this.props.addUser(newUser);
    };

    handleChange = (e) => {
        const {value,name} = e.target;
        this.setState({
            [name] : value
        })
    };

    render() {
        const { error } = this.state;
        return (
            <React.Fragment>
                <form id="formularioId" onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label className="col-sm-2 col-form-label">Name</label>
                            <input type="text"
                                   name="name"
                                   className="form-control"
                                   placeholder="User name"
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label className="col-sm-2 col-form-label">Headquarter</label>
                            <select id="inputState" className="form-control">
                                <option>CISO</option>
                                <option>CIO</option>
                                <option>CEO</option>
                                <option>CTO</option>
                                <option>CLO</option>
                                <option>COO</option>
                                <option>CFO</option>
                                <option>TM</option>
                                <option>DP</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label  className="col-sm-2 col-form-label">Surname</label>
                            <input type="text"
                                   className="form-control"
                                   name="surname"
                                   onChange={this.handleChange}
                                   placeholder="Last name"/>
                        </div>
                        <div className="form-group col-md-4">
                            <label  className="col-sm-2 col-form-label">Role</label>
                            <select id="inputState" className="form-control">
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
                                /*onChange={this.onChangeEmail}*//>
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
                {error ? <div className="font-weight-bold alert alert-danger text-center mt-4">
                    Todos los campos son obligatorios
                </div> : '' }
            </React.Fragment>

        );
    }
}

export default connect(null, { addUser }) (UserForm);

