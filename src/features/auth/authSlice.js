import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { loggedUser: [] },
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
