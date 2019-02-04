import jsonUser from '../../api/user';

const defaultState = jsonUser;

export const actionTypeUser = [];

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.data];

       case 'DELETE_USER':
                state = state.filter(user => {
                return user.id !== action.data.id
            });
            return [...state];

        default:
            return state;
    }
};

export default reducer;