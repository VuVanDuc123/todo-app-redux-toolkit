// const initialState = [
//   { id: 1, name: "Học reactjs", completed: false, prioriry: "Medium" },
//   { id: 2, name: "Học Võ", completed: true, prioriry: "High" },
//   { id: 3, name: "Học Redux toolkit", completed: false, prioriry: "Low" },
// ];

// const todoListReducer = (state = initialState, action) => {
//   // console.log(state, action);
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];

//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );//nếu id=payload thì completed = !completed : todo
//     default:
//       return state;
//   }
// };

// export default todoListReducer;

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
    }, //action creators
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      currentTodo.completed = !currentTodo.completed;
    },
  },
});

