import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";
const tempEvent = {
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
    event: (state) => {},
  },
});

export const { event } = calendarSlice.actions;
