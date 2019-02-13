import {ADD_CITY, DISPLAY_CITIES} from "./types";
import axios from 'axios';

export const displayCities = () => async dispatch => {
    const answer = await axios.get('http://localhost:5000/city');
    dispatch({
        type: DISPLAY_CITIES,
        payload: answer.data
    })
};

export const addCity = (city) => async dispatch => {
    const answer = await axios.post('http://localhost:5000/city',city);
    dispatch({
        type: ADD_CITY,
        payload: answer.data
    })
};

