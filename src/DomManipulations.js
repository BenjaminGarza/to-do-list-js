import ProjectModule from './ProjectModule';
import TodoSaved from './TodoSaved';
import Mixing from './Mixing';
import todo from './todoFactory';

const DomManipulations = (() => {
  const projects = ProjectModule.returnAllProjects();
  const currentProject = 0;
  const store = {};
  const showProjectList = () => {
    const projectListDiv = document.querySelector('#projectListDiv');
    projectListDiv.innerHTML = '';
    projects.forEach((project) => {
      const childDiv = document.createElement('div');
      childDiv.classList.add('project-item');
      childDiv.innerHTML = project;
      projectListDiv.insertAdjacentElement('beforeend', childDiv);
      DomManipulations.clickOnProject();
    });
    const firstProjectOneList = document.querySelector('#projectListDiv > div:nth-child(1)');
    firstProjectOneList.classList.add('currently_select_project');
  };

  window.deletTodoItem = (index) => {
    TodoSaved.removeTodo(index);
    localStorage.setItem('todoItems', JSON.stringify(TodoSaved.todo_array));
    DomManipulations.displayTodoList();
  };

  const displayTodoList = () => {
    const tableBody = document.querySelector('#table-body');
    let content = '';
    TodoSaved.todo_array.forEach((todoItem, index) => {
      const {
        title,
        description,
        dueDate,
        priority,
        status,
      } = todoItem;
      if (projects[DomManipulations.currentProject] === todoItem.projectName) {
        content += `<tr>
            <td>${title}</td>
            <td>${description}</td>
            <td>${dueDate}</td>
            <td>${priority}</td>
            <td>${status}</td>
            <td><button class="btn-secondary" data-index="${index}" onclick="retrievedEditedInfo(${index})"><i class="fas fa-pencil-alt"></i></button></td>
            <td><button class="" data-index="${index}" onclick="deletTodoItem(${index})"><i class="fas fa-trash-alt"></i></button></td>
        </tr>`;
      }
    });
    tableBody.innerHTML = content;
  };

  const clickOnProject = () => {
    const projectItems = document.querySelectorAll('.project-item');
    const projectItemTitle = document.querySelector('#project-title');
    projectItems.forEach((element, index) => {
      element.addEventListener('click', (e) => {
        projectItems.forEach((project) => {
          if (project.classList.contains('currently_select_project')) {
            project.classList.remove('currently_select_project');
          }
        });

        element.classList.add('currently_select_project');
        DomManipulations.currentProject = index;
        projectItemTitle.innerHTML = projects[DomManipulations.currentProject];
        DomManipulations.displayTodoList();
        Mixing.closeTodoForm();
        Mixing.deletProjectExitValidation();
        e.preventDefault();
      });
    });
  };

  const collectTodoEditedInfo = (index) => {
    const project = document.querySelector('#todo-project-input').value;
    const title = document.querySelector('#todo-title-input').value;
    const description = document.querySelector('#todo-description-input').value;
    const dueDate = document.querySelector('#todo-date-input').value;
    const priority = document.querySelector('#todo-priority-input').value;
    const status = document.querySelector('#todo-status-input').value;

    if (title.length > 5 && description.length > 5 && dueDate.length > 5) {
      const editedTodo = todo(title, description, dueDate, priority, project, status);
      TodoSaved.updateTodo(editedTodo, index);
      DomManipulations.displayTodoList();
      Mixing.editTodoExitValidation();
    } else {
      Mixing.editTodoValidation();
    }
  };

  window.retrievedEditedInfo = (index) => {
    Mixing.openToDoForm();

    document.querySelector('#todo-title-input').value = TodoSaved.todo_array[index].title;
    document.querySelector('#todo-description-input').value = TodoSaved.todo_array[index].description;
    document.querySelector('#todo-date-input').value = TodoSaved.todo_array[index].dueDate;
    document.querySelector('#todo-project-input').value = TodoSaved.todo_array[index].projectName;

    const { priority } = TodoSaved.todo_array[index];
    const prioritySelectInput = document.querySelector('#todo-priority-input');
    if (priority === 'High Priority') {
      prioritySelectInput.options[0] = new Option('High Priority', 'High Priority');
      prioritySelectInput.options[1] = new Option('Low Priority', 'Low Priority');
    } else {
      prioritySelectInput.options[0] = new Option('Low Priority', 'Low Priority');
      prioritySelectInput.options[1] = new Option('High Priority', 'High Priority');
    }

    const { status } = TodoSaved.todo_array[index];
    const statusSelect = document.querySelector('#todo-status-input');
    if (status === 'COMPLETE') {
      statusSelect.options[0] = new Option('Done', 'Done');
      statusSelect.options[1] = new Option('Undone', 'Undone');
    } else {
      statusSelect.options[0] = new Option('Undone', 'Undone');
      statusSelect.options[1] = new Option('Done', 'Done');
    }

    const addTodoButton = document.querySelector('#addTodoBtn');
    addTodoButton.addEventListener('click', (e) => {
      DomManipulations.collectTodoEditedInfo(index);
      e.preventDefault();
    });
  };

  return {
    store,
    projects,
    showProjectList,
    clickOnProject,
    currentProject,
    displayTodoList,
    collectTodoEditedInfo,
  };
})();

export default DomManipulations;
