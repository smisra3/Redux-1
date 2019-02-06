import jsonUser from '../../api/user';

const defaultState = jsonUser;

export const actionTypeUser = {
    ADD_USER : 'ADD_USER',
    DELETE_USER : 'DELETE_USER',
    EDIT_USER : 'EDIT_USER'
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {

        case actionTypeUser.ADD_USER:
            return [...state, action.data];

       case actionTypeUser.DELETE_USER:
           state = state.filter(user => user.id !== action.data.id);
            return [...state];

        case actionTypeUser.EDIT_USER:
            const index = state.findIndex(user => user.id === action.data.id); //Índice del estado de mi usuario
            state[index] = {// Modifica el indice del usuario
                ...state[index], //Conserva el estado anterior(x indice lo identifica
                ...action.data.user //Sobreescribe los valores en la clave de valor de su estado anterior
            };
            return [...state];

        default:
            return state;
    }
};

export default reducer;