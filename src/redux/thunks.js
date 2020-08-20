import { database } from "../firebase";
import {
  addTodoActionCreator,
  removeTodoActionCreator,
  getTodosActionCreator,
} from "./actionCreators";

export const addTodo = (todo) => (dipatch) => {
  const todosRef = database.ref("todos");
  todosRef.once("child_added", (snapshot) => {
    dipatch(addTodoActionCreator({ [snapshot.key]: snapshot.val() }));
  });
  const newTodoRef = todosRef.push();
  newTodoRef.set(todo);
};

export const removeTodo = (key) => (dispatch) => {
  const todosRef = database.ref("todos");
  todosRef
    .child(key)
    .remove()
    .then(() => {
      dispatch(removeTodoActionCreator(key));
    });
};

export const getTodos = () => (dispatch) => {
  const todosRef = database.ref("todos");
  todosRef.once("value", (snapshot) => {
    let todos = {};
    snapshot.forEach((item) => {
      todos = {
        ...todos,
        [item.key]: item.val(),
      };
    });
    dispatch(getTodosActionCreator(todos));
  });
};
