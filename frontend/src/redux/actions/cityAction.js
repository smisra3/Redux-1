import { ADD_CITY, DISPLAY_CITIES, CONFIG, GET_CITIES_USERS} from "./types";
import axios from 'axios';

export const getCities = () => async dispatch => {
    const citiesRaw = await axios.get('http://52.213.25.226:3030/city',CONFIG);
    const usersRaw = await axios.get('http://52.213.25.226:3030/user',CONFIG);
    const cities = citiesRaw.data.data;
    const users = usersRaw.data.data;

    const citiesWithUsers = cities.map(city => {
        city.users = city.users.map(user => users.find(el => user.id === el._id ) );
        return city
    });
    dispatch({
        type: GET_CITIES_USERS,
        payload: citiesWithUsers
    })
};

export const displayCities = () => async dispatch => {
    const answer = await axios.get('http://52.213.25.226:3030/city',CONFIG);
    dispatch({
        type: DISPLAY_CITIES,
        payload: answer.data.data
    })
};

export const addCity = (city) => async dispatch => {
    const answer = await axios.post('http://52.213.25.226:3030/city',city,CONFIG);
    dispatch({
        type: ADD_CITY,
        payload: answer.data
    })
};

