import { configureStore } from "@reduxjs/toolkit";

import notesReducer from "./reducers/notes";

export const store = configureStore({
  reducer: {
    notesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
