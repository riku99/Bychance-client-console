import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { sessionsReducer } from "./sessions";

const rootReducer = combineReducers({
  sessionsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
