import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { loggedUser: [], authUser: { email: "" } },
  reducers: {
    setAuthUser: (state, action) => {
      console.log(action.payload,"action.payload");
      state.authUser.email = action.payload;
    },
    setToken:(state,action)=>{

    }
  },
});

export const {setAuthUser} = authSlice.actions;

export default authSlice.reducer;
