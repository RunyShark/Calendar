import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";
const tempEvent = {
  _id: new Date().getTime(),
  title: "Cumpleaños",
  notes: "Pastel",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafafa",
  user: {
    _id: "123",
    name: "Dario",
  },
};
export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [tempEvent],
    activeEvent: null,
  },
  reducers: {
    onSetActiEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
  },
});

export const { onSetActiEvent, onAddNewEvent } = calendarSlice.actions;
