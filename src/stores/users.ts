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
  enablePushNotification?: boolean;
  showedPostModal?: boolean;
  admin?: boolean;
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
    setShowdPostModal: (state, action: PayloadAction<boolean>) => ({
      ...state,
      user: {
        ...state.user!,
        showedPostModal: action.payload,
      },
    }),
  },
});

export const usersReducer = usersSlice.reducer;

export const { setUser, setShowdPostModal } = usersSlice.actions;
