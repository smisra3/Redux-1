import {DISPLAY_ROLES, CONFIG} from "./types";
import axios from "axios";

export const displayRoles = () => async dispatch => {
    const answer = await axios.get('http://52.213.25.226:3030/role', CONFIG);
    dispatch({
        type: DISPLAY_ROLES,
        payload: answer.data.data
    })
};