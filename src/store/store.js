import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice } from "./";

export const store = configureStore({
  reducer: {
    calendar: calendarSlice.reducer,
  },
});
