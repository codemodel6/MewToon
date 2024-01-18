import { configureStore } from "@reduxjs/toolkit";
import scrollSlice from "./scrollSlice";

const store = configureStore({
  reducer: {
    scrollSlice,
  },
});

export default store;
