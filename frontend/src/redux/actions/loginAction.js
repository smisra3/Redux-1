import { ADD_REGISTER } from "./types";
import axios from 'axios';
import NavLink from "react-router-dom/es/NavLink";
import {Link} from "react-router-dom";
import React from "react";

export const addNewRegister = register => async dispatch => {

    const answer = await axios.post(`http://52.213.25.226:3030/auth-users/`, register)
        .then( res => {
            dispatch(
                {
                    type: ADD_REGISTER,
                    payload: answer.data});
        })
        .catch(e => {
            if(e.response){
                console.log(e.response.data.message);
            }
            /*  dispatch({
                type: ERROR,
                payload: e.response.data.message
            });*/
            return e.response;
        });

};
