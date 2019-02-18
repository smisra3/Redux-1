import {ADD_REGISTER} from "../actions/types";

const initialState = {
    logins: []
};

export default function (state = initialState, action){
    switch (action.type) {
        case ADD_REGISTER:
            return {
                ...state,
                logins: action.payload
            };
        default:
            return state;
    }
};


