import { configureStore } from "@reduxjs/toolkit";
import incdecReducer from "./reducers/index";
import dataSlice from "./reducers/dataSlice";

export default configureStore({
  reducer: {
    number: incdecReducer,
    data: dataSlice,
  },
});
