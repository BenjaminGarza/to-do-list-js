import DomManipulations from './DomManipulations'
import ProjectModule from './ProjectModule'
import Mixing from './Mixing'
import todo from './todoFactory'
import TodoSaved from './TodoSaved'

const { projects } = DomManipulations

const createProject = () => {
  const projectButton = document.querySelector('#addProjectBtn')
  projectButton.addEventListener('click', (e) => {
    e.preventDefault()
    const projectInputField = document.querySelector('#projectInputField')
    const projectName = document.querySelector('#projectInputField').value
    if (projectName.length > 0) {
      if (!projects.includes(projectName)) {
        ProjectModule.addProject(projectName)
        projectInputField.value = ''
      } else {
        alert('Project Already exists !!')
      }
    }
    Mixing.closeTodoForm()
    DomManipulations.showProjectList()
    DomManipulations.displayTodoList()
  })
};

const creatProjectForm = () => {
  const projectbtn = document.querySelector('#project-button');
  projectbtn.addEventListener('click', () => {
    Mixing.openProjectForm();
    createProject();
  });
};
