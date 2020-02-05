import Forms from './Forms'

const Mixing = (() => {
  const openToDoForm = () => {
    const todoFormDiv = document.querySelector('#todo-form-div')
    todoFormDiv.innerHTML = Forms.todo
  }

  const closeTodoForm = () => {
    const todoFormDiv = document.querySelector('#todo-form-div')
    todoFormDiv.innerHTML = ''
  }

  return {
    openToDoForm, closeTodoForm, openProjectForm, closeProjectForm
  }
})()

export default Mixing
