import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { sessionsReducer } from "./sessions";
import { errorsReducer } from "./errors";
import { usersReducer } from "./users";

const rootReducer = combineReducers({
  sessionsReducer,
  errorsReducer,
  usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
