import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
  id: string;
  name: string;
  image?: string | null;
  lat?: number | null;
  lng?: number | null;
  address?: string | null;
  instagram?: string | null;
  twitter?: string | null;
  url?: string | null;
};

type InitialState = {
  user?: User;
};

const initialState: InitialState = {
  user: undefined,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | undefined>) => ({
      ...state,
      user: action.payload,
    }),
  },
});

export const usersReducer = usersSlice.reducer;

export const { setUser } = usersSlice.actions;
