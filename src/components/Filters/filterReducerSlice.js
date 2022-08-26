// const initialState = {
//   search: "",
//   status: "All",
//   priorities: [],
// };
// const filtersReducer = (state = initialState, action) => {
//   // console.log(state, action);
//   switch (action.type) {
//     case "filters/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filters/statusFilterChanges":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "filters/priorityFilterChanges":
//       return {
//         ...state,
//         priorities: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default filtersReducer;

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
