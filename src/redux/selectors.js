// export const todoListSelector = (state) => {
//   const searchText = searchTextSelector(state);

//   const todoRemaining = state.todoList.filter((todo) =>
//     todo.name.includes(searchText)
//   );
//   return todoRemaining;
// }; // xuất ra kết hợp với search

// export const searchTextSelector = (state) => {
//   return state.filters.search;
// };

// dùng reselect sẽ gộp lại selector rất là tiện
// import { createSelector } from "reselect";
import { createSelector } from "@reduxjs/toolkit";

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  filterPrioritiesSelector,
  (todoList, searchText, status, priorities) => {
    // status: 'all', 'completed', 'todo'
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.prioriry) //text,...-All-Medium,...
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.prioriry) : true) //text=...,-Completed,todo-...
      );
    });
  }
);
