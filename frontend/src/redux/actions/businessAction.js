import {DISPLAY_BUSINESSMODELS, CONFIG} from "./types";
import axios from "axios";

export const getBusinessmodels = () => async dispatch => {
    const answer = await axios.get('http://52.213.25.226:3030/businessmodel', CONFIG);
    dispatch({
        type: DISPLAY_BUSINESSMODELS,
        payload: answer.data.data
    })
};