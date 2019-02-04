import React, {Component} from 'react';
import { connect } from 'react-redux';

class Table extends Component {

    deleteUser = (id) => {
        this.props.dispatch({
            data : {id},
            type: 'DELETE_USER'
        });
    };

    render() {

        let tableStyle = {
            marginBottom : '5%',
            marginTop : '5%'
        };

        const datosUsuario = this.props.users.map((user) => {
            return (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.surname}</td>
                    <td>{user.roleId}</td>
                    <td>Mirar bbdd/?</td>
                    <button>Editar</button>
                    <button onClick={() => {this.deleteUser(user.id)}}>Borrar</button>
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
        );
    }
}

/*Con el connect en este caso leemos los datos para mostrarlos en la tabla
Le pasamos una función que por obligación nos devuelva un objeto
y ese objeto se añadirá a los props
state = Al estado de redux
props = Los props de nuestros componentes
todos = Nuevos componentes
 */
export default connect ((state,props) => {
    return {
        users : state.users
    }
}) (Table);