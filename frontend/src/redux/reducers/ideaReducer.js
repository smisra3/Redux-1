import {DISPLAY_IDEAS, ADD_IDEA, GET_IDEA, EDIT_IDEA, DELETE_IDEA} from '../actions/types';

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
        case GET_IDEA:
            return {
                ...state,
                idea: action.payload
            };
        case EDIT_IDEA:
            return{
                ...state,
                ideas: state.ideas.map(idea => idea._id === action.payload.id
                    ? (idea = action.payload) : idea)
            };
        case DELETE_IDEA:
            return{
                ...state,
                ideas: state.ideas.filter(idea => (
                    idea._id !== action.payload
                ))
            };
        default:
            return state;
    }
};
