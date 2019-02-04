import jsonCity from '../../api/city';

const defaultState = jsonCity;

export const actionTypeCity = [];

const reducer = (state = defaultState, action) => {
  switch (action.type) {
      case 'ADD_CITY':
          return [...state, action.data];
      default:
          return state;
  }
};

export default reducer;