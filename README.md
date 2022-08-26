pages demo: https://vuvanduc123.github.io/todo-app-redux-toolkit/

1-> store
-npm install @reduxjs/toolkit

2-> import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

export default store;

3 -> todoSlice: nát cắt

import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "Học reactjs", completed: false, prioriry: "Medium" },
    { id: 2, name: "Học Võ", completed: true, prioriry: "High" },
    { id: 3, name: "Học Redux toolkit", completed: false, prioriry: "Low" },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload); //rất hay
    }, //action creators: actions gia lập
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      currentTodo.completed = !currentTodo.completed;
    },
  },
});

4 -> filterSlice: nát cắt tìm kiếm

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    searchFilterChanges: (state, action) => {
      // mutation: thao tác đc trực tiếp nên obj, array || IMMER
      // return {
      //   ...state,
      //   search: action.payload,
      // };
      // mới
      state.search = action.payload;
    }, // => actions: {type:"filters/searchFilterChanges"} k cần tạo riêng action
    statusFilterChanges: (state, action) => {
      state.status = action.payload;
    },
    prioritiesFilterChanges: (state, action) => {
      state.priorities = action.payload;
    },
  },
});

5 -> index -> lấy...
import { useDispatch, useSelector } from "react-redux";

const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    // dispatch(searchFilterChanges(e.target.value));
    dispatch(filtersSlice.actions.searchFilterChanges(e.target.value)); // gọi ra thì ....filtersSlice.actions....(actions giả lập từ reducer)
  };


6 -> hàm sử lý selector...

// dùng reselect sẽ gộp lại selector rất là tiện || redux/toolkit thì có sẵn
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
