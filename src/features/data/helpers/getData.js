import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("data/all", async () => {
    try {
      const responseData = await axios("https://data-analytics-86dde-default-rtdb.firebaseio.com/analytics.json");
      console.log(responseData,"responseData");
      return responseData.data;
    } catch (error) {
      console.error("API Error:", error);
    }
  });