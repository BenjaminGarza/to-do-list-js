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

  const todoValidationMessage = () => {
    const validationDiv = document.querySelector('#validation-info');
    validationDiv.innerHTML = 'title and description must be greater than 6 letters';
  };

  const todoValidationExit = () => {
    const validationDiv = document.querySelector('#validation-info');
    validationDiv.innerHTML = '';
  };

  const projectValidationMessage = () => {
    const validationDiv = document.querySelector('#validation-info');
    validationDiv.innerHTML = 'Project already exist';
  };
  const projectValidationExit = () => {
    const validationDiv = document.querySelector('#validation-info');
    validationDiv.innerHTML = '';
  };

  const editTodoValidation = () => {
    const validationDiv = document.querySelector('#validation-info');
    validationDiv.innerHTML = 'to do must be greater than 5 letters';
  };

  const editTodoExitValidation = () => {
    const validationDiv = document.querySelector('#validation-info');
    validationDiv.innerHTML = '';
  };

  const deletProjectValidation = () => {
    const validationDiv = document.querySelector('#validation-info');
    validationDiv.innerHTML = 'Cannot delete default project';
  };

  const deletProjectExitValidation = () => {
    const validationDiv = document.querySelector('#validation-info');
    validationDiv.innerHTML = '';
  };

  return {
    openToDoForm,
    closeTodoForm,
    openProjectForm,
    closeProjectForm,
    todoValidationMessage,
    projectValidationMessage,
    projectValidationExit,
    todoValidationExit,
    editTodoValidation,
    editTodoExitValidation,
    deletProjectValidation,
    deletProjectExitValidation,
  };
})();

export default Mixing;
