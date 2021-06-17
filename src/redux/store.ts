import { configureStore } from "@reduxjs/toolkit";

import notesReducer from "./reducers/notes";

const noteStateJson = localStorage.getItem("notesState");
const preloadedState = noteStateJson ? JSON.parse(noteStateJson) : {};

export const store = configureStore({
  reducer: {
    notesReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  localStorage.setItem("notesState", JSON.stringify(store.getState()));
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
