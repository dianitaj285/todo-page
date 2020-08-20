import * as ACTIONS from "./actions";

const initialState = {
  todos: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_TODOS:
      return { ...state, todos: action.todos };
    case ACTIONS.ADD_TODO:
      return { ...state, todos: { ...state.todos, ...action.todo } };
    case ACTIONS.REMOVE_TODO: {
      const { [action.key]: removed, ...todos } = state.todos;
      return {
        ...state,
        todos,
      };
    }
    default:
      return state;
  }
};
