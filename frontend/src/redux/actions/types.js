//Users Actions
export const DISPLAY_USERS = 'DISPLAY_USERS';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';

//Cities Actions
export const DISPLAY_CITIES = 'DISPLAY_CITIES';
export const ADD_CITY = 'ADD_CITY';
export const GET_CITIES_USERS = 'GET_CITIES_USERS';

//Ideas Action
export const DISPLAY_IDEAS = 'DISPLAY_IDEAS';
export const ADD_IDEA = 'ADD_IDEA';

//Team Actions
export const DISPLAY_TEAMS = 'DISPLAY_TEAMS';

//Roles Action
export const DISPLAY_ROLES = 'DISPLAY_ROLES';

//Businessmodels Action
export const DISPLAY_BUSINESSMODELS = 'DISPLAY_BUSINESSMODELS';

//Login-Register Action
export const ADD_REGISTER = 'ADD_REGISTER';
export const ERROR = 'ERROR';

export const TOKEN = localStorage.getItem("token");
export const CONFIG = {
    headers: {'Authorization':  TOKEN}
};
