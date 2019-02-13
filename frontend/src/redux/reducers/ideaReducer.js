import { DISPLAY_IDEAS, ADD_IDEA } from '../actions/types';

const initialState = {
    ideas: []
};

export default function (state = initialState, action){
    switch (action.type) {
        case DISPLAY_IDEAS:
            return {
                ...state,
                ideas: action.payload
            };
        case ADD_IDEA:
            return{
                ...state,
                ideas: [...state.ideas, action.payload]
            };
        default:
            return state;
    }
};
