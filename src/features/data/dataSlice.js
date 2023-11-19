import { createSlice } from "@reduxjs/toolkit";
import { getData } from "./helpers/getData";

const dataSlice = createSlice({
  name: "data",
  initialState: { analyticsData: [], dataLoading: false, selectedFeat: "A" },
  reducers: {
    setSelectedFeat: (state, action) => {
      state.selectedFeat = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.dataLoading = true;
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        console.log(payload, "payload");
        state.analyticsData = payload;
        state.dataLoading = false;
      })
      .addCase(getData.rejected, (state) => {
        state.dataLoading = false;
      });
  },
});

export const {setSelectedFeat} = dataSlice.actions;

export default dataSlice.reducer;
