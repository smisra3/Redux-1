import { DISPLAY_USERS, ADD_USER, DELETE_USER } from "./types";
import axios from 'axios';

export const displayUsers = () => async dispatch => {
    const answer = await axios.get('http://localhost:5000/user');
    dispatch({
        type: DISPLAY_USERS,
        payload: answer.data
    })
};

export const addUser = (user) => async dispatch => {
    const answer = await axios.post('http://localhost:5000/user',user);
    dispatch({
        type: ADD_USER,
        payload: answer.data
    })
};

export const deleteUser = (id) => async dispatch => {
    await axios.delete(`http://localhost:5000/user/${id}`);
    dispatch({
        type: DELETE_USER,
        payload: id
    })
};

