import { createSlice } from "@reduxjs/toolkit";

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    isDateModalOpen: false,
  },
  reducers: {
    onOpenDateModall: (state) => {
      state.isDateModalOpen = true;
    },
    onCloseDateModall: (state) => {
      state.isDateModalOpen = false;
    },
  },
});

export const { onOpenDateModall, onCloseDateModall } = calendarSlice.actions;
