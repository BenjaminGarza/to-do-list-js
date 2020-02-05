const domManipulations = (() => {
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
})()