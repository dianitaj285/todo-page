import * as ACTIONS from "./actions";

export function getTodosActionCreator(todos) {
  return { type: ACTIONS.GET_TODOS, todos };
}

export function addTodoActionCreator(todo) {
  return { type: ACTIONS.ADD_TODO, todo };
}

export function removeTodoActionCreator(key) {
  return { type: ACTIONS.REMOVE_TODO, key };
}
