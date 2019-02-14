import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../styles/users.css'
import { deleteUser } from "../../redux/actions/userAction";

class UserRow extends Component {
    deleteUser = () => {
        const { id } = this.props.info;
        this.props.deleteUser(id);
    };

    render() {
        const { id, name, surname, roleId } =this.props.info;
        return (
                <tr>
                    <td>{name}</td>
                    <td>{surname}</td>
                    <td>{roleId}</td>
                    <td>City</td>
                    <button onClick={this.deleteUser}>Borrar</button>
                </tr>
        );
    }
}

export default connect(null, { deleteUser }) (UserRow);
