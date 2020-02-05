/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/ProjectModule.js
const ProjectModule = (() => {
  const store = {};
  store.projectList = localStorage.getItem('projectItems')
    ? JSON.parse(localStorage.getItem('projectItems')) : ['DEFAULT PROJECT'];
  store.addProject = (newProjectName) => {
    store.projectList.push(newProjectName);
    localStorage.setItem('projectItems', JSON.stringify(store.projectList));
  };
  store.removeProject = (projectName) => {
    const idx = store.projectList.indexOf(projectName);
    if (idx !== -1) {
      store.projectList.splice(idx, 1);
    }
    localStorage.setItem('projectItems', JSON.stringify(store.projectList));
  };
  store.returnAllProjects = () => store.projectList;
  return store;
})();
/* harmony default export */ var src_ProjectModule = (ProjectModule);
// CONCATENATED MODULE: ./src/TodoSaved.js

const TodoSaved = (() => {
  const store = {}
  store.todo_array = localStorage.getItem('todoItems')
    ? JSON.parse(localStorage.getItem('todoItems')) : []
  store.addTodo = (newTodo) => {
    TodoSaved.todo_array.push(newTodo)
    localStorage.setItem('todoItems', JSON.stringify(TodoSaved.todo_array))
  }
  store.updateTodo = (editedTodo, index) => {
    TodoSaved.todo_array[index] = editedTodo
    localStorage.setItem('todoItems', JSON.stringify(TodoSaved.todo_array))
  }
  store.removeTodo = (todoItemIndex) => {
    TodoSaved.todo_array.splice(todoItemIndex, 1)
  }

  return store
})()

/* harmony default export */ var src_TodoSaved = (TodoSaved);

// CONCATENATED MODULE: ./src/Forms.js
const Forms = (() => {
  const project = `
    <div id="project-form-div" class="mx-auto">
      <form id="project-form">
        <input id="projectInputField" type="text" name="projectName" placeholder="Project Name" placeholder="Add project" required>
        <button id="addProjectBtn"><i class="fas fa-plus-square"></i></button>
      </form>
    </div>
  `

  const todo = `
    <form id="todo-form">
      <fieldset class="form-group">
        <input id="todo-project-input" type="hidden" name="project" value="GENERAL" required>
      </fieldset>
      <fieldset class="form-group">
        <input id="todo-title-input" type="text" class="form-control" placeholder="Emter todo title" required>
      </fieldset>
      <fieldset class="form-group">
        <input type="text" class="form-control" id="todo-description-input" placeholder="Enter todo description" required>
      </fieldset>
      <fieldset class="form-group">
        <input id="todo-date-input" type="date" name="dueDate" placeholder="Todo Due Date" required>
        <select name="priority" id="todo-priority-input">
          <option value="High Priority">High Priority</option>
          <option value="Low Priority">Low Priority</option>
        </select>
        <select name="status" id="todo-status-input">
          <option value="Done">Done</option>
          <option value="Undone">Undone</option>
        </select>
      </fieldset>
      <fieldset class="form-group mt-3">
          <button id="addTodoBtn">SUBMIT</button>
       </fieldset>
    </form>
  `

  return { project, todo }
})()

/* harmony default export */ var src_Forms = (Forms);

// CONCATENATED MODULE: ./src/Mixing.js


const Mixing = (() => {
  const openToDoForm = () => {
    const todoFormDiv = document.querySelector('#todo-form-div')
    todoFormDiv.innerHTML = src_Forms.todo
  }

  const closeTodoForm = () => {
    const todoFormDiv = document.querySelector('#todo-form-div')
    todoFormDiv.innerHTML = ''
  }

  const openProjectForm = () => {
    const header = document.querySelector('#headerDiv')
    header.innerHTML = src_Forms.project
    console.log(header)
  }

  const closeProjectForm = () => {
    const header = document.querySelector('#headerDiv')
    header.innerHTML = ''
  }

  return {
    openToDoForm, closeTodoForm, openProjectForm, closeProjectForm
  }
})()

/* harmony default export */ var src_Mixing = (Mixing);

// CONCATENATED MODULE: ./src/todoFactory.js
const todo = (title, description, dueDate, priority = 'NOT IMPORTANT', projectName = 'GENERAL', status = 'INCOMPLETE') => ({
  title,
  description,
  dueDate,
  priority,
  projectName,
  status,
});
/* harmony default export */ var todoFactory = (todo);
// CONCATENATED MODULE: ./src/DomManipulations.js





const DomManipulations = (() => {
  const projects = src_ProjectModule.returnAllProjects()
  const currentProject = 0
  const store = {}
  const showProjectList = () => {
    const projectListDiv = document.querySelector('#projectListDiv')
    projectListDiv.innerHTML = ''
    projects.forEach((project) => {
      const childDiv = document.createElement('div')
      childDiv.classList.add('project-item')
      childDiv.innerHTML = project
      projectListDiv.insertAdjacentElement('beforeend', childDiv)
      DomManipulations.clickOnProject()
    })
    const firstProjectOneList = document.querySelector('#projectListDiv > div:nth-child(1)')
    firstProjectOneList.classList.add('currently_select_project')
  }

  window.deletTodoItem = (index) => {
    src_TodoSaved.removeTodo(index)
    localStorage.setItem('todoItems', JSON.stringify(src_TodoSaved.todo_array))
    DomManipulations.displayTodoList()
  }

  const displayTodoList = () => {
    const tableBody = document.querySelector('#table-body')
    let content = ''
    src_TodoSaved.todo_array.forEach((todoItem, index) => {
      const {
        title, description, dueDate, priority, status
      } = todoItem
      if (projects[DomManipulations.currentProject] === todoItem.projectName) {
        content += `<tr>
            <td>${title}</td>
            <td>${description}</td>
            <td>${dueDate}</td>
            <td>${priority}</td>
            <td>${status}</td>
            <td><button class="btn-secondary" data-index="${index}" onclick="retrievedEditedInfo(${index})"><i class="fas fa-pencil-alt"></i></button></td>
            <td><button class="" data-index="${index}" onclick="deletTodoItem(${index})"><i class="fas fa-trash-alt"></i></button></td>
        </tr>`
      }
    })
    tableBody.innerHTML = content
  }

  const clickOnProject = () => {
    const projectItems = document.querySelectorAll('.project-item')
    const projectItemTitle = document.querySelector('#project-title')
    projectItems.forEach((element, index) => {
      element.addEventListener('click', (e) => {
        projectItems.forEach((project) => {
          if (project.classList.contains('currently_select_project')) {
            project.classList.remove('currently_select_project')
          }
        })

        element.classList.add('currently_select_project')
        DomManipulations.currentProject = index
        projectItemTitle.innerHTML = projects[DomManipulations.currentProject]
        DomManipulations.displayTodoList()
        src_Mixing.closeTodoForm()
        e.preventDefault()
      })
    })
  }

  const collectTodoEditedInfo = (index) => {
    const project = document.querySelector('#todo-project-input').value
    const title = document.querySelector('#todo-title-input').value
    const description = document.querySelector('#todo-description-input').value
    const dueDate = document.querySelector('#todo-date-input').value
    const priority = document.querySelector('#todo-priority-input').value
    const status = document.querySelector('#todo-status-input').value

    if (title.length > 5 && description.length > 5 && dueDate.length > 5) {
      const editedTodo = todoFactory(title, description, dueDate, priority, project, status)
      src_TodoSaved.updateTodo(editedTodo, index)
      DomManipulations.displayTodoList()
    } else {
      alert('to do must be greater than 5 letters')
    }
  }

  window.retrievedEditedInfo = (index) => {
    src_Mixing.openToDoForm()

    document.querySelector('#todo-title-input').value = src_TodoSaved.todo_array[index].title
    document.querySelector('#todo-description-input').value = src_TodoSaved.todo_array[index].description
    document.querySelector('#todo-date-input').value = src_TodoSaved.todo_array[index].dueDate
    document.querySelector('#todo-project-input').value = src_TodoSaved.todo_array[index].projectName

    const { priority } = src_TodoSaved.todo_array[index]
    const prioritySelectInput = document.querySelector('#todo-priority-input')
    if (priority === 'High Priority') {
      prioritySelectInput.options[0] = new Option('High Priority', 'High Priority')
      prioritySelectInput.options[1] = new Option('Low Priority', 'Low Priority')
    } else {
      prioritySelectInput.options[0] = new Option('Low Priority', 'Low Priority')
      prioritySelectInput.options[1] = new Option('High Priority', 'High Priority')
    }

    const { status } = src_TodoSaved.todo_array[index]
    const statusSelect = document.querySelector('#todo-status-input')
    if (status === 'COMPLETE') {
      statusSelect.options[0] = new Option('Done', 'Done')
      statusSelect.options[1] = new Option('Undone', 'Undone')
    } else {
      statusSelect.options[0] = new Option('Undone', 'Undone')
      statusSelect.options[1] = new Option('Done', 'Done')
    }

    const addTodoButton = document.querySelector('#addTodoBtn')
    addTodoButton.addEventListener('click', (e) => {
      DomManipulations.collectTodoEditedInfo(index)
      e.preventDefault()
    })
  }

  return {
    store,
    projects,
    showProjectList,
    clickOnProject,
    currentProject,
    displayTodoList,
    collectTodoEditedInfo
  }
})()

/* harmony default export */ var src_DomManipulations = (DomManipulations);

// CONCATENATED MODULE: ./src/index.js






const { projects: src_projects } = src_DomManipulations

const createProject = () => {
  const projectButton = document.querySelector('#addProjectBtn')
  projectButton.addEventListener('click', (e) => {
    e.preventDefault()
    const projectInputField = document.querySelector('#projectInputField')
    const projectName = document.querySelector('#projectInputField').value
    if (projectName.length > 0) {
      if (!src_projects.includes(projectName)) {
        src_ProjectModule.addProject(projectName)
        projectInputField.value = ''
      } else {
        alert('Project Already exists !!')
      }
    }
    src_Mixing.closeTodoForm()
    src_DomManipulations.showProjectList()
    src_DomManipulations.displayTodoList()
  })
}

const creatProjectForm = () => {
  const projectbtn = document.querySelector('#project-button')
  console.log(projectbtn)
  projectbtn.addEventListener('click', () => {
    src_Mixing.openProjectForm()
    createProject()
  })
}

const createTodo = () => {
  const todoButton = document.querySelector('#addTodoBtn')
  todoButton.addEventListener('click', (e) => {
    const project = document.querySelector('#todo-project-input').value
    const title = document.querySelector('#todo-title-input').value
    const description = document.querySelector('#todo-description-input').value
    const dueDate = document.querySelector('#todo-date-input').value
    const priority = document.querySelector('#todo-priority-input').value
    const status = document.querySelector('#todo-status-input').value
    if (title.length > 5 && description.length > 5 && dueDate.length > 5) {
      const todoObj = todoFactory(title, description, dueDate, priority, project, status)
      src_TodoSaved.addTodo(todoObj)
      src_Mixing.closeTodoForm()
    } else {
      alert('Todo can\'t be less than 5 leters')
    }
    localStorage.setItem('todoItems', JSON.stringify(src_TodoSaved.todo_array))
    src_DomManipulations.displayTodoList()
    e.preventDefault()
  })
}

const deleteProjectItem = () => {
  const deleteProjectButton = document.querySelector('#delete-project-button')
  deleteProjectButton.addEventListener('click', () => {
    if (src_projects[src_DomManipulations.currentProject] === 'DEFAULT PROJECT') {
      alert('Cannot delete default project')
    } else {
      if (src_TodoSaved.todo_array.length !== 0) {
        const arrToDelete = []
        src_TodoSaved.todo_array.forEach((toDoItem) => {
          if (src_projects[src_DomManipulations.currentProject] === toDoItem.projectName) {
            arrToDelete.push(toDoItem)
          }
        })
        src_TodoSaved.todo_array = src_TodoSaved.todo_array.filter((n) => !arrToDelete.includes(n))
        localStorage.setItem('todoItems', JSON.stringify(src_TodoSaved.todo_array))
      }
      src_ProjectModule.removeProject(src_projects[src_DomManipulations.currentProject])
    }
    document.location.reload()
  })
}

const createTodoForm = () => {
  const todoButton = document.querySelector('#todo-button')
  todoButton.addEventListener('click', () => {
    src_Mixing.openToDoForm()
    const todoProjectInput = document.querySelector('#todo-project-input')
    todoProjectInput.value = src_projects[src_DomManipulations.currentProject]
    createTodo()
  })
}

src_DomManipulations.showProjectList()
creatProjectForm()
createTodoForm()
deleteProjectItem()


/***/ })
/******/ ]);