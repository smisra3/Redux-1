import { DISPLAY_BUSINESSMODELS } from "../actions/types";

const initialState = {
    businessmodels: []
};

export default function (state = initialState, action){
    switch (action.type) {
        case DISPLAY_BUSINESSMODELS:
            return {
                ...state,
                businessmodels: action.payload
            };
        default:
            return state;
    }
};
