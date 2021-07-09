import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = { login: boolean };

const initialState: InitialState = { login: false };

const sessionsSlice = createSlice({
  name: "sessions",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => ({
      ...state,
      login: action.payload,
    }),
  },
});

export const sessionsReducer = sessionsSlice.reducer;

export const { setLogin } = sessionsSlice.actions;
