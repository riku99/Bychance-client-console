import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UnreadNotifications } from "~/types/store/notifications";

type InitialState = {
  unread: UnreadNotifications;
};

const initialState: InitialState = {
  unread: [],
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setUnredNotifications: (
      state,
      actions: PayloadAction<UnreadNotifications>
    ) => ({
      ...state,
      unread: actions.payload,
    }),
  },
});

export const notificationsReducer = notificationsSlice.reducer;

export const { setUnredNotifications } = notificationsSlice.actions;
