import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchData = createAsyncThunk("data/fetch", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});

// export const searchData = createAsyncThunk("data/fetch", async (search) => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   const filteredPosts = response.data.filter(
//     (post) =>
//       post.title.toLowerCase().includes(search.toLowerCase()) ||
//       post.body.toLowerCase().includes(search.toLowerCase())
//   );
//   return filteredPosts;
// });

const dataSlice = createSlice({
  name: "data",
  initialState: {
    loading: false,
    data: null,
    error: null,
    filterpost: null,
  },
  reducers: {
    // Search: createAsyncThunk(
    //   "data/search",
    //   async (searchQuery, { getState }) => {
    //     const state = getState().data;
    //     if (!state.data) {
    //       await fetchData();
    //     }
    //     const filteredPosts = state.data.filter(
    //       (post) =>
    //         post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //         post.body.toLowerCase().includes(searchQuery.toLowerCase())
    //     );
    //     console.log(filteredPosts);
    //     return filteredPosts;
    //   }
    // ),

    // Search: (state, action) => {
    //   console.log("search function executed");

    //   console.log(state);
    //   console.log(action);

    //   const searchQuery = action.payload; // searchQuery is the search term entered by the user
    //   const filteredPosts = state.data.filter(
    //     (post) =>
    //       post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //       post.body.toLowerCase().includes(searchQuery.toLowerCase())
    //   );

    //   console.log(filteredPosts);

    //   return filteredPosts;

    //   // console.log(state.data);
    //   // console.log(action.payload);
    //   // const filteredPosts = state.data.filter(
    //   //   (post) =>
    //   //     post.title.toLowerCase().includes(e.target[0].value.toLowerCase()) ||
    //   //     post.body.toLowerCase().includes(e.target[0].value.toLowerCase())
    //   // );
    //   // console.log(filteredPosts);
    // },
    Add: (state, action) => {
      state.filterpost = action.payload;
    },
    updateData: (state, action) => {
      state.data = [...state.data, action.payload];
      state.filterpost = [...state.filterpost, action.payload];
    },
    deletePost: (state, action) => {
      // let finalIndex = -1;
      // arr = arr.filter((item) => item !== value);

      state.data = state.data.filter(
        (item) =>
          item.title !== action.payload.title &&
          item.body !== action.payload.body
      );

      state.filterpost = state.filterpost.filter(
        (item) =>
          item.title !== action.payload.title &&
          item.body !== action.payload.body
      );

      // forEach((item, index) => {
      //   if (
      //     item.title === action.payload.title &&
      //     item.body === action.payload.body
      //   ) {
      //     finalIndex = index;
      //   }

      //   if (finalIndex !== -1) {
      //     state.data.splice(finalIndex, 1);
      //     state.filterpost = state.data;
      //   }
      // });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.filterpost = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { deletePost, Add, updateData } = dataSlice.actions;
export default dataSlice.reducer;
