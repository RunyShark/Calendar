import { useDispatch, useSelector } from "react-redux";
import {
  onSetActiEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
} from "../index";

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiEvent(calendarEvent));
  };
  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent._id) {
      //*actualizo
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      //*creo
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };
  const deleteEvente = () => {
    dispatch(onDeleteEvent());
  };
  return {
    //*propiedades
    activeEvent,
    events,
    //*metodos
    setActiveEvent,
    startSavingEvent,
    deleteEvente,
  };
};
