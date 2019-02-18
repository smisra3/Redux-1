import {DISPLAY_IDEAS, ADD_IDEA, CONFIG, GET_IDEA, EDIT_IDEA} from "./types";
import axios from 'axios';

export const displayIdeas = () => async dispatch => {
    const answer = await axios.get('http://52.213.25.226:3030/idea',CONFIG);
    dispatch({
        type: DISPLAY_IDEAS,
        payload: answer.data.data
    })
};

export const addIdea = idea => async dispatch => {
    const answer = await axios.post(`http://52.213.25.226:3030/idea`, idea, CONFIG);
    dispatch({
        type: ADD_IDEA,
        payload: answer.data
    })
};

export const getIdea = (id) => async  dispatch => {
    const answer = await axios.get(`http://52.213.25.226:3030/idea/${id}`,CONFIG);
    console.log("getIdea", answer.data);
    dispatch({
        type: GET_IDEA,
        payload: answer.data
    })
};

export const editIdea = idea => async dispatch => {
    const answer = await axios.put(`http://52.213.25.226:3030/idea/${idea._id}`,idea, CONFIG);
    dispatch({
        type: EDIT_IDEA,
        payload: answer.data
    })
};