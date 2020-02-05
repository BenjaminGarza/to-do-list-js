const domManipulations = (() => {
  const projects = ProjectModule.returnAllProjects()
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
    TodoSaved.removeTodo(index)
    localStorage.setItem('todoItems', JSON.stringify(TodoSaved.todo_array))
    DomManipulations.displayTodoList()
  }

  const displayTodoList = () => {
    const tableBody = document.querySelector('#table-body')
    let content = ''
    TodoSaved.todo_array.forEach((todoItem, index) => {
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
        Mixing.closeTodoForm()
        e.preventDefault()
      })
    })
  }
})()
