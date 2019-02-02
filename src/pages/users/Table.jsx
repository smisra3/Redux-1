import React, {Component} from 'react';
import { connect } from 'react-redux';

class Table extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    render() {

        let tableStyle = {
            marginBottom : '5%',
            marginTop : '5%'
        };

        const datosUsuario = this.props.todos.map((todo) => {
            return (
                <tr>
                    <td>{todo.tarea}</td>
                    /*<td>{todo.username}</td>
                    <td>{todo.role}</td>
                    <td>{todo.email}</td>*/
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

export default connect ((state,props) => {
    return {
        todos : state
    }
}) (Table);