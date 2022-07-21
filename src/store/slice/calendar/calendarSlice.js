import { createSlice } from "@reduxjs/toolkit";

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    isLoadingEvents: true,
    events: [],
    activeEvent: null,
  },
  reducers: {
    onEvents: (state, { payload }) => {
      state.isLoadingEvents = false;
      payload.forEach((event) => {
        const existe = state.events.some((dbEvent) => dbEvent.id === event.id);
        if (!existe) {
          state.events.push(event);
        }
      });
    },
    onSetActiEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((event) => {
        if (event._id === payload._id) {
          return payload;
        }
        return event;
      });
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event._id !== state.activeEvent._id
        );
        state.activeEvent = null;
      }
    },
  },
});

export const {
  onSetActiEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
  onEvents,
} = calendarSlice.actions;
