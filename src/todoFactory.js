const todo = (title, description, dueDate, priority = 'NOT IMPORTANT', projectName = 'GENERAL', status = 'INCOMPLETE') => ({
  title,
  description,
  dueDate,
  priority,
  projectName,
  status,
});
export default todo;
