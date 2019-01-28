import React, {Component} from 'react';
import AddUserForm from "./AddUserForm";

class UserDesplegable extends Component {

    render() {

        let tableStyle = {
            marginBottom : '5%',
            marginTop : '5%'
        }

        const datosUsuario = this.props.todos.map((todo,i) => {
            return (
                <tr>
                    <td>{todo.name}</td>
                    <td>{todo.username}</td>
                    <td>{todo.role}</td>
                    <td>{todo.address.city}</td>
                </tr>
            )});

        return (
            <table className="table" style={tableStyle}>
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Role</th>
                    <th scope="col">Headquarter</th>
                </tr>
                </thead>
                <tbody>
                {datosUsuario}
                </tbody>
            </table>
        )
    }
}

export default UserDesplegable;