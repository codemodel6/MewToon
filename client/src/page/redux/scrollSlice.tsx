import { createSlice } from "@reduxjs/toolkit";

interface ScrollState {
  value: number;
}

let initialState: ScrollState = {
  value: 0,
};

const scrollSlice = createSlice({
  name: "CreateSlice",
  initialState,
  reducers: {},
});

export default scrollSlice.reducer;
