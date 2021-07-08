import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ApiError } from "~/types";

type ErrorState = {
  apiError?: ApiError;
};

const initialState: ErrorState = { apiError: undefined };

const errorsSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    setApiError: (state, action: PayloadAction<ApiError>) => {
      return { apiError: action.payload };
    },
    resetError: () => ({
      apiError: undefined,
    }),
  },
});

export const errorsReducer = errorsSlice.reducer;

export const { resetError, setApiError } = errorsSlice.actions;
