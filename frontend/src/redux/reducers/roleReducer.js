import { DISPLAY_ROLES } from "../actions/types";

const initialState = {
    roles: []
};

export default function (state = initialState, action){
    switch (action.type) {
        case DISPLAY_ROLES:
            return {
                ...state,
                roles: action.payload
            };
        default:
            return state;
    }
};


