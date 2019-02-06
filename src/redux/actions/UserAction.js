import { actionTypeUser } from '../reducers/userReducer';

export const addUser = (user) => {
  return {
      type: actionTypeUser.ADD_USER,
      data: user
  }
};

export const deleteUser = (id) => {
    return {
        type: actionTypeUser.DELETE_USER,
        data: {id}
    }
};

/*export const editUser = (user,id) => {
    return {
        type: actionTypeUser.EDIT_USER,
        data: {user,id}
    }
};*/

