import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("product/all", async () => {
    try {
      const responseData = await axios("");
  
      return responseData;
    } catch (error) {
      console.error("API Error:", error);
    }
  });