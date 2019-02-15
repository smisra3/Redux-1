import {ADD_USER, DELETE_USER, DISPLAY_USERS} from "../actions/types";

const initialState = {
    users: []
};

export default function (state = initialState, action){
    switch (action.type) {
        case DISPLAY_USERS:
            return {
                ...state,
                users: action.payload
            };
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case DELETE_USER:
            return{
                ...state,
                users: state.users.filter(user => (
                    user._id !== action.payload
                ))
            };
        default:
            return state;
    }
};


