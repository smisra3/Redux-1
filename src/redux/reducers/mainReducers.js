const defaultState = [];

//reducer, recibe datos y devuelve datos. "Función pura"
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state,action.data];
        default:
            return state;
    }
};

export default reducer;

/*Si defaultState es un Objeto y no un array como ahora,
*entonces el return del reducer sería algo así:
* return {
*   ...state,
*   todos: [...state.todos,action.data]
* }
*
* Además el cambiaría el return de los connect, en este caso de User/Table por ejemplo,
* se modificaría y quedaría algo así:
* return{
*   todos: state.todos
* }
* */