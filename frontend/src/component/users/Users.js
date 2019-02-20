import React, {Component} from 'react';
import { displayUsers } from "../../redux/actions/userAction";
import { displayRoles } from "../../redux/actions/roleAction";
import { displayCities } from "../../redux/actions/cityAction";
import { connect } from 'react-redux';
import UserRow from './UserRow';
import UserForm from './UserForm';
import '../../styles/users.css';

class Users extends Component {

    componentDidMount() {
        this.props.displayUsers();
        this.props.displayRoles();
        this.props.displayCities();
    }

    render() {

        const { roles, cities } = this.props;

        return (
            <React.Fragment>
                <table id="table" className="container">
                    <thead>
                    <tr>
                        <th id="user" colSpan="4">Users</th>
                    </tr>
                        <tr id="user-row">
                            <th scope="col">Name</th>
                            <th scope="col">Surname</th>
                            <th scope="col">Role</th>
                            <th scope="col">HeadQuarter</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map(user => (
                            <UserRow key={user._id} info={user} roles={roles}/>
                        ))}
                    </tbody>
                </table>
                <UserForm cities={cities} roles={roles} key={roles._id}/>
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    return {users: state.users.users,
            roles: state.roles.roles,
            cities: state.cities.cities}
};

export default connect (mapStateToProps, { displayUsers , displayRoles, displayCities })(Users);