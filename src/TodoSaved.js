
const TodoSaved = (() => {
  const store = {};
  store.todo_array = localStorage.getItem('todoItems')
    ? JSON.parse(localStorage.getItem('todoItems')) : [];
  store.addTodo = (newTodo) => {
    TodoSaved.todo_array.push(newTodo);
    localStorage.setItem('todoItems', JSON.stringify(TodoSaved.todo_array));
  };
  store.updateTodo = (editedTodo, index) => {
    TodoSaved.todo_array[index] = editedTodo;
    localStorage.setItem('todoItems', JSON.stringify(TodoSaved.todo_array));
  };
  store.removeTodo = (todoItemIndex) => {
    TodoSaved.todo_array.splice(todoItemIndex, 1);
  };

  return store;
})();

export default TodoSaved;
