// vì khi ta làm nó sẽ rất nhiều nên ta dùng sliceReducer để phân nhỏ nó đi

// const initialState = {
//   filters: {
//     search: "",
//     status: "All",
//     priorities: [],
//   },
//   todoList: [
//     { id: 1, name: "Học reactjs", completed: false, prioriry: "Medium" },
//     { id: 2, name: "Học Võ", completed: true, prioriry: "High" },
//     { id: 3, name: "Học Redux toolkit", completed: false, prioriry: "Low" },
//   ],
// };
// const rootReducer = (state = initialState, action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case "todoList/addTodo":
//       return {
//         ...state,
//         todoList: [...state.todoList, action.payload],
//       };

//     case "filter/searchFilterChange":
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           search: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

/*import filtersReducer from "../components/Filters/filterReducerSlice";
import todoListReducer from "../components/TodoList/todoReducerSlice";

const rootReducer = (state = {}, action) => {
  return {
    filters: filtersReducer(state.filters, action),
    todoList: todoListReducer(state.todoList, action),
  };
};

export default rootReducer;*/
// rất gọn c1: tường minh

import { combineReducers } from "redux";
import filtersReducer from "../components/Filters/filterReducerSlice";
import todoListReducer from "../components/TodoList/todoReducerSlice";

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
});
// c2: thu gọn lại

export default rootReducer;
