// import { createSlice } from "@reduxjs/toolkit";

// export const incdecSlice = createSlice({
//   name: "incdec",
//   initialstate: 17,
//   reducer: {
//     Inc: (state, action) => {
//       return (state += 1);
//     },
//     Dec: (state, action) => {
//       return (state -= 1);
//     },
//   },
// });

// export const { Inc, Dec } = incdecSlice.actions;
// export default incdecSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const incdecSlice = createSlice({
  name: "incdec",
  initialState: 17,
  reducers: {
    Inc: (state, action) => {
      return (state += 1);
    },
    Dec: (state, action) => {
      return (state -= 1);
    },
    Search: (state, action) => {
      console.log("search function executed");

      console.log(state);
      console.log(action);

      const searchQuery = action.payload; // searchQuery is the search term entered by the user
      const filteredPosts = state.data.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.body.toLowerCase().includes(searchQuery.toLowerCase())
      );

      console.log(filteredPosts);

      return filteredPosts;

      // console.log(state.data);
      // console.log(action.payload);
      // const filteredPosts = state.data.filter(
      //   (post) =>
      //     post.title.toLowerCase().includes(e.target[0].value.toLowerCase()) ||
      //     post.body.toLowerCase().includes(e.target[0].value.toLowerCase())
      // );
      // console.log(filteredPosts);
    },
    Add: () => {},
    Delete: (state, action) => {
      return (state -= 1);
    },
  },
});

export const { Inc, Dec } = incdecSlice.actions;
export default incdecSlice.reducer;
