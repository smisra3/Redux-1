import jsonTeam from '../../api/team';

const defaultState = jsonTeam;

export const actionTypeTeam = [];

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;