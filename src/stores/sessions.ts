import { createSlice } from "@reduxjs/toolkit";

type InitialState = { login: boolean };

const initialState: InitialState = { login: false };

const sessionsSlice = createSlice({
  name: "sessions",
  initialState,
  reducers: {},
});

export const sessionsReducer = sessionsSlice.reducer;
