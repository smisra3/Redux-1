import { DISPLAY_TEAMS } from "./types";
import axios from 'axios';

export const displayTeam = () => async dispatch => {
    const answer = await axios.get('http://localhost:5000/team');
    dispatch({
        type: DISPLAY_TEAMS,
        payload: answer.data
    })
};