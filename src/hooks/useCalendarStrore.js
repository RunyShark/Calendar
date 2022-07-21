import { useDispatch, useSelector } from "react-redux";
import {
  onSetActiEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
  calendarApi,
} from "../index";

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiEvent(calendarEvent));
  };
  const startSavingEvent = async (calendarEvent) => {
    console.log("Estar", calendarEvent);

    if (calendarEvent._id) {
      //*actualizo
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      //*creo
      // const { data } = await calendarApi.post("/events", calendarEvent);
      // console.log(data);
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };
  const starteleteEvente = () => {
    dispatch(onDeleteEvent());
  };
  return {
    //*propiedades
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,
    //*metodos
    setActiveEvent,
    startSavingEvent,
    starteleteEvente,
  };
};
