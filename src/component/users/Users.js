import React, {Component} from 'react';
import { displayUsers } from "../../redux/actions/userAction";
import { connect } from 'react-redux';
import UserRow from './UserRow';
import UserForm from './UserForm';

class Users extends Component {

    componentDidMount() {
        this.props.displayUsers();
    }

    render() {
        const { users } = this.props;
        return (
            <React.Fragment>
                <table id="table" className="table">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Role</th>
                        <th scope="col">Headquarter</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <UserRow info={user} key={user.id}/>
                    ))};
                    </tbody>
                </table>
                <UserForm/>
            </React.Fragment>

        );
    }
};

const mapStateToProps = state => ({
    users: state.users.users
});

export default connect (mapStateToProps, { displayUsers })(Users);