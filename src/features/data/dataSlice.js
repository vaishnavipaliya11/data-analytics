// Import necessary functions from Redux Toolkit
import {  createSlice } from "@reduxjs/toolkit";

// Define a slice of the state using createSlice
const dataSlice = createSlice({
  name: "data",
  initialState: { userData: [] },
  reducers: {},
});

export const {} = dataSlice.actions;

export default dataSlice.reducer;
