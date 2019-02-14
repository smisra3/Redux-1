import { DISPLAY_TEAMS, CONFIG } from "./types";
import axios from 'axios';

export const displayTeam = () => async dispatch => {
    const answer = await axios.get('http://52.213.25.226:3030/team', CONFIG);
    dispatch({
        type: DISPLAY_TEAMS,
        payload: answer.data.data
    })
};