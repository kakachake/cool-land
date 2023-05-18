import { configureStore } from "@reduxjs/toolkit";
import basicReducer from "./slices/basic";

export const store = configureStore({
  reducer: {
    basic: basicReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
