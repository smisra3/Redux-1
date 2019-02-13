import { DISPLAY_IDEAS, ADD_IDEA } from "./types";
import axios from 'axios';

export const displayIdeas = () => async dispatch => {
    const answer = await axios.get('http://localhost:5000/idea');
    dispatch({
        type: DISPLAY_IDEAS,
        payload: answer.data
    })
};

export const addIdea = idea => async dispatch => {
    const answer = await axios.post(`http://localhost:5000/idea`, idea);
    dispatch({
        type: ADD_IDEA,
        payload: answer.data
    })
};