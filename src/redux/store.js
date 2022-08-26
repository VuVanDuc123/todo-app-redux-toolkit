// import { createStore } from "redux";
// import rootReducer from "./reducers";

// import { composeWithDevTools } from "redux-devtools-extension";

// const composeEnhancers = composeWithDevTools(); // khi dùng redux toolkit sẽ được tích hợp vào
// const store = createStore(rootReducer, composeEnhancers); // 3 tham số 1 reducer, 2 giá trị value, 3 các thư viện

// export default store;

// redux/toolkit
import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filterReducerSlice";
import todoListSlice from "../components/TodoList/todoReducerSlice";

// reducer store
const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

export default store;
