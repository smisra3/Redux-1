import React, {Component} from 'react';
import {connect} from "react-redux";
import '../../styles/cities.css';
import { addCity } from "../../redux/actions/cityAction";
import { displayUsers } from "../../redux/actions/userAction";

class Form extends Component {

    componentDidMount() {
        this.props.displayUsers();
    }

    state = {
        users: [],
        userSelected: null,
        name: '',
        address: '',
        telephone: ''
    };
    selectUser = e => {
        console.log( e.target.value);
        this.setState({userSelected:JSON.parse(e.target.value)})
    };

    addUserToTeam = (e) => {
        e.preventDefault();
        this.setState({users: [...this.state.users, this.state.userSelected]});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { users, name, address, telephone } = this.state;
        console.log(typeof (users));
        const newCity = {
            users:this.state.users,
            name,
            address,
            telephone
        };
        this.props.addCity(newCity);
    };

    handleChange = (e) => {
        const {value,name} = e.target;
        this.setState({
            [name] : value
        })
    };

    render() {
        const { users } = this.props;
        return (
            <form id="formStyle"  onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <h5 className="text-center">Location</h5>
                    </div>
                    <div className="form-group col-md-8">
                        <h5 className="text-center">Demium Team</h5>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-1">
                        <label htmlFor="inputEmail4">Country</label>
                    </div>
                    <div className="form-group col-md-2">
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Spain</option>
                        </select>
                    </div>
                    <div className="offset-md-2">
                    </div>
                    <div className="form-group col-md-1">
                        <label htmlFor="inputEmail4">Team</label>
                    </div>
                    <div className="form-group col-md-2">
                        <select id="selectOption" className="form-control" onChange={this.selectUser}>
                            {users.map(user => (
                                <option value={JSON.stringify(user)} key={user.id}>{user.name}</option>
                            ))}
                        </select>
                        <label id="labelAddUser">
                            {
                                this.state.users.map(user => <div>{user.name}</div>)
                            }
                        </label>
                    </div>
                    <div className="form-group col-md-1">
                        <button value="" className="btn btn-primary btn-sm"
                        onClick={this.addUserToTeam}>Add</button>
                    </div>
                    <div className="form-group col-md-1">
                        <button  className="btn btn-danger btn-sm">Remove</button>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-1">
                        <label htmlFor="inputEmail4">City</label>
                    </div>
                    <div className="form-group col-md-2">
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Madrid</option>
                            <option>Barcelona</option>
                            <option>Valencia</option>
                        </select>
                    </div>
                </div >
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label>Address</label>
                        <input type="text"
                               name="address"
                               className="form-control"
                               placeholder="Full Address"
                               onChange={this.handleChange}
                               required/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-2">
                        <label>Phone</label>
                    </div>
                    <div className="form-group col-md-2">
                        <input type="text"
                               className="form-control"
                               placeholder="Phone number"
                               required
                               name="phone"
                               onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-md-2 offset-md-2">
                        <button type="submit" className="btn btn-primary">Create</button>
                    </div>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users.users
});

export default connect(mapStateToProps, { addCity , displayUsers }) (Form);