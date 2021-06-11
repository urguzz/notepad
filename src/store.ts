import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import notesReducer from "./reducers/notes";

export const store = configureStore({
  reducer: {
    notesReducer,
  },
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
