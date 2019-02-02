import React from 'react';
import { connect } from 'react-redux';

import Table from "./Table";
import Form from "./Form";

const Users = (props) => {
    console.log(props);
    return (
        <div id="userPage">
            <Table/>
            <Form/>
            <button onClick={() => {
                props.dispatch({
                   type: 'ADD_TODO',
                   data: {
                       completed: false,
                       tarea : 'Aprender Redux'
                   }
                });
            }}>Crea Todo</button>
        </div>
        /*<Form/>*/
    );
};

export default connect ()(Users);