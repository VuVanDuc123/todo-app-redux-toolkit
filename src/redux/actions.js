export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};
// hoàn thành hay chưa hoàn thành completed, todo
export const toggleTodoStatus = (todoId) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: todoId,
  };
};

export const searchFilterChanges = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

export const statusFilterChanges = (status) => {
  return {
    type: "filters/statusFilterChanges",
    payload: status,
  };
};

export const prioritiesFilterChanges = (priorities) => {
  return {
    type: "filters/priorityFilterChanges",
    payload: priorities,
  };
};
