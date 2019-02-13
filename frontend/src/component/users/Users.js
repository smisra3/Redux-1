import React, {Component} from 'react';
import { displayUsers } from "../../redux/actions/userAction";
import { displayRoles } from "../../redux/actions/roleAction";
import { displayCities } from "../../redux/actions/cityAction";
import { connect } from 'react-redux';
import UserRow from './UserRow';
import UserForm from './UserForm';

class Users extends Component {

    componentDidMount() {
        this.props.displayUsers();
        this.props.displayRoles();
        this.props.displayCities();
    }

    render() {
        const { users, roles, cities } = this.props;
        return (
            <React.Fragment>
                <table id="table" className="table">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Role</th>
                        <th scope="col">HeadQuarter</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <UserRow info={user} key={user.id}/>
                    ))};
                    </tbody>
                </table>
                <UserForm cities={cities} roles={roles} key={roles.id}/>
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    return { users: state.users.users,
            roles: state.roles.roles,
            cities: state.cities.cities}
};

export default connect (mapStateToProps, { displayUsers , displayRoles, displayCities })(Users);