import Forms from './Forms';

const Mixing = (() => {
  const openToDoForm = () => {
    const todoFormDiv = document.querySelector('#todo-form-div');
    todoFormDiv.innerHTML = Forms.todo;
  };

  const closeTodoForm = () => {
    const todoFormDiv = document.querySelector('#todo-form-div');
    todoFormDiv.innerHTML = '';
  };

  const openProjectForm = () => {
    const header = document.querySelector('#headerDiv');
    header.innerHTML = Forms.project;
  };

  const closeProjectForm = () => {
    const header = document.querySelector('#headerDiv');
    header.innerHTML = '';
  };

  return {
    openToDoForm, closeTodoForm, openProjectForm, closeProjectForm
  };
})();

export default Mixing;
