import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addUser } from "../../redux/actions/userAction";
import '../../styles/users.css';

class UserForm extends Component {

    state = {
        name: '',
        surname: '',
        email: '',
        telephone: '',
        error: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, surname, telephone, email } = this.state;

        if(name === '' || surname === '' || telephone === '' || email === ''){
            this.setState({error:true});
            return;
        }
        this.setState({error:false});

        const newUser = {name, surname, email, telephone};
        this.props.addUser(newUser);
    };

    handleChange = (e) => {
        const {value,name} = e.target;
        this.setState({
            [name] : value
        })
    };

    render() {
        const roles  = this.props.roles;
        const cities  = this.props.cities;
        const { error } = this.state;
        return (
            <React.Fragment>
                <form id="form" onSubmit={this.handleSubmit}>
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
                                {cities.map(city => (
                                    <option key={city.id}>{city.name}</option>
                                ))}
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
                                <option>None yet</option>
                                {roles.map(role => (
                                    <option key={role.id}>{role.name}</option>
                                ))}
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
                                   name="email"
                                    onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <label  className="col-sm-2 col-form-label">Phone</label>
                        </div>
                        <div className="form-group col-md-4">
                            <input type="text"
                                   name="telephone"
                                   className="form-control"
                                   placeholder="Phone number"
                                   onChange={this.handleChange}/>
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

