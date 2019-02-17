import {ADD_CITY, DISPLAY_CITIES, GET_CITY} from '../actions/types';

const initialState = {
    cities: []
};

export default function (state = initialState, action){
    switch (action.type) {
        case DISPLAY_CITIES:
            return {
                ...state,
                cities: action.payload
            };
        case ADD_CITY:
            return {
                ...state,
                cities: [...state.cities, action.payload]
            };
        case GET_CITY:
            return {
                ...state,
                city: action.payload
            };
        default:
            return state;
    }
};
