import { DISPLAY_USERS, ADD_USER, DELETE_USER, CONFIG } from "./types";
import axios from 'axios';

export const displayUsers = () => async dispatch => {
    const answer = await axios.get('http://52.213.25.226:3030/user',CONFIG);
    dispatch({
        type: DISPLAY_USERS,
        payload: answer.data.data
    })
};

export const addUser = (user) => async dispatch => {
    const answer = await axios.post('http://52.213.25.226:3030/user',user, CONFIG);
    dispatch({
        type: ADD_USER,
        payload: answer.data
    })
};

export const deleteUser = id => async dispatch => {
    await axios.delete(`http://52.213.25.226:3030/user/${id}`, CONFIG);
    dispatch({
        type: DELETE_USER,
        payload: id
    })
};

