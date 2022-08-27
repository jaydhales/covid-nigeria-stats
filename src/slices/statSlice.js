import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getStats = createAsyncThunk("statistics/getStats", async () => {
  const res = await fetch("https://covidnigeria.herokuapp.com/api").then(
    (data) => data.json()
  );

  return res;
});

export const statSlice = createSlice({
  name: "statistics",
  initialState: {
    data: {},
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getStats.pending]: (state) => {
      state.loading = true;
    },
    [getStats.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [getStats.rejected]: (state) => {
      state.loading = false;
    },
  },
});
