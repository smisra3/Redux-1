import {ADD_CITY, DISPLAY_CITIES, EDIT_CITY, GET_CITY} from '../actions/types';

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
        case EDIT_CITY:
            return{
                ...state,
                cities: state.cities.map(city => city._id === action.payload.id
                    ? (city = action.payload) : city)
            };
        default:
            return state;
    }
};
