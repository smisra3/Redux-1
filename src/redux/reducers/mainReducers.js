/*const defaultState = [];
//reducer, recibe datos y devuelve datos. "Función pura"
/*OPTIMIZAR*/
/*
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.data]
            };
        case 'ADD_CITY':
            return {
                ...state,
                cities: [...state.cities, action.data]
            };
        case 'ADD_IDEA':
            return {
                ...state,
                ideas: [...state.ideas, action.data]
            };
        case 'ADD_TEAM':
            return {
                ...state,
                teams: [...state.teams, action.data]
            };
        default:
            return state;
    }
};

export default reducer;*/