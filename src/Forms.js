const Forms = (() => {
  const project = `
    <div id="project-form-div" class="mx-auto">
      <form id="project-form">
        <input id="projectInputField" type="text" name="projectName" placeholder="Project Name" placeholder="Add project" required>
        <button id="addProjectBtn"><i class="fas fa-plus-square"></i></button>
      </form>
    </div>
  `;

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
  `;

  return { project, todo };
})();

export default Forms;
