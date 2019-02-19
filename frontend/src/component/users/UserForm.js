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
        roleId: '',
        error: false
    };

    nameRef = React.createRef();
    surnameRef = React.createRef();
    emailRef = React.createRef();
    telephoneRef = React.createRef();
    roleRef = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.nameRef.current.value;
        const surname = this.surnameRef.current.value;
        const email = this.emailRef.current.value;
        const telephone = this.telephoneRef.current.value;
        const roleId = this.roleRef.current.value;

        if(name === '' || surname === '' || telephone === '' || email === ''){
            this.setState({error:true});
            return;
        }
        this.setState({error:false});
        const newUser = { name, surname, email, telephone, roleId};
        this.props.addUser(newUser);
    };

    render() {
        const roles  = this.props.roles;
        const cities  = this.props.cities;
        const { error } = this.state;
        return (
            <React.Fragment>
                <form id="form" onSubmit={this.handleSubmit}>
                    <h5 id="title">Add User</h5>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <h5 id="h5C" className="col-sm-2 col-form-label">Name</h5>
                            <input type="text"
                                   name="name"
                                   className="form-control ml-2"
                                   placeholder="User name"
                                   ref={this.nameRef}/>
                        </div>
                        <div className="form-group col-md-4">
                            <h5 id="h5C" className="col-sm-2 col-form-label">Headquarter</h5>
                            <select id="inputState" className="form-control">
                                {[...new Set(cities.map(city => city.name))]
                                    .map (name => (
                                    <option key={name}>{name}</option >
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <h5 id="h5C" className="col-sm-2 col-form-label">Surname</h5>
                            <input type="text"
                                   className="form-control ml-2"
                                   name="surname"
                                   ref={this.surnameRef}
                                   placeholder="Last name"/>
                        </div>
                        <div className="form-group col-md-4">
                            <h5 id="h5C" className="col-sm-2 col-form-label">Role</h5>
                            <select ref={this.roleRef} id="inputState" className="form-control">
                                <option>None yet</option>
                                {roles.map(role => (
                                    <option value={role._id} key={role._id}>{role.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <h5 id="h5C" className="col-sm-2 col-form-label">Email</h5>
                        </div>
                        <div className="form-group col-md-4">
                            <input type="email"
                                   className="form-control"
                                   placeholder="Email"
                                   name="email"
                                   ref={this.emailRef}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <h5 id="h5C" className="col-sm-2 col-form-label">Phone</h5>
                        </div>
                        <div className="form-group col-md-4">
                            <input type="text"
                                   name="telephone"
                                   className="form-control"
                                   placeholder="Phone number"
                                   ref={this.telephoneRef}/>
                        </div>
                        <div className="form-group offset-1 col-md-3">
                            <button id="btn-create" type="submit" className="btn btn-primary">CREATE</button>
                        </div>
                    </div>
                </form>
                {error ? <div className="font-weight-bold alert alert-danger text-center mt-4">
                    Todos los campos son obligatorios excepto el role
                </div> : '' }
            </React.Fragment>
        );
    }
}

export default connect(null, { addUser }) (UserForm);

