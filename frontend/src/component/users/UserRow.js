import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../styles/users.css'
import { deleteUser } from "../../redux/actions/userAction";

class UserRow extends Component {

    deleteUser = () => {
        const { _id } = this.props.info;
        this.props.deleteUser(_id);
    };

    render() {
        const { name, surname, roleId } =this.props.info;

        return (
                <tr>
                    <td>{name}</td>
                    <td>{surname}</td>
                    <td>Role</td>
                    <td>City</td>
                    <td type="button" id="btn-delete" onClick={this.deleteUser}>Borrar</td>
                </tr>
        );
    }
}

export default connect(null, { deleteUser }) (UserRow);
