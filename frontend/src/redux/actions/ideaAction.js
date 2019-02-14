import {DISPLAY_IDEAS, ADD_IDEA, CONFIG} from "./types";
import axios from 'axios';

export const displayIdeas = () => async dispatch => {
    const answer = await axios.get('http://52.213.25.226:3030/idea',CONFIG);
    dispatch({
        type: DISPLAY_IDEAS,
        payload: answer.data.data
    })
};

export const addIdea = idea => async dispatch => {
    const answer = await axios.post(`http://localhost:5000/idea`, idea);
    dispatch({
        type: ADD_IDEA,
        payload: answer.data
    })
};