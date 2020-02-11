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
export default ProjectModule;
