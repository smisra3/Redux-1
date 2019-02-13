import {DISPLAY_ROLES} from "./types";
import axios from "axios";

export const displayRoles = () => async dispatch => {
    const answer = await axios.get('http://localhost:5000/role');
    dispatch({
        type: DISPLAY_ROLES,
        payload: answer.data
    })
};
