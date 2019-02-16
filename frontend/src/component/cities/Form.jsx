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

    cityName = (e) => {
        const {value,name} = e.target;
        this.setState({
            [name] : value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { users, name, address, telephone } = this.state;
        console.log(users,name,address,telephone);
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
            <form id="form"  onSubmit={this.handleSubmit}>
                <h5 id="title">Add City</h5>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <h5 className="text-center">Location</h5>
                    </div>
                    <div className="form-group col-md-8">
                        <h5 className="text-center">Demium Team</h5>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <h5 id="h5C" className="ml-2">Country</h5>
                    </div>
                    <div className="form-group col-md-2">
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Spain</option>
                        </select>
                    </div>
                    <div className="offset-md-2">
                    </div>
                    <div className="form-group col-md-1">
                        <label>Team</label>
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
                        <h5 id="h5C" className="ml-2">City</h5>
                    </div>
                    <div className="form-group col-md-2">
                        <select className="form-control" onChange={this.cityName}>
                            <option value="Madrid">Madrid</option>
                            <option value="Barcelona">Barcelona</option>
                            <option value="Valencia">Valencia</option>
                        </select>
                    </div>
                </div >
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <h5 id="h5C" className="ml-2">Address</h5>
                        <input type="text"
                               name="address"
                               className="form-control ml-2"
                               placeholder="Full Address"
                               onChange={this.handleChange}
                               required/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-2">
                        <h5 id="h5C" className="ml-2">Phone</h5>
                    </div>
                    <div className="form-group col-md-2">
                        <input type="text"
                               className="form-control"
                               placeholder="Phone number"
                               required
                               name="telephone"
                               onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-md-2 offset-md-2">
                        <button id="btn-create" type="submit" className="btn btn-primary">CREATE</button>
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