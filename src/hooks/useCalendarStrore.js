import { useDispatch, useSelector } from "react-redux";
import {
  onSetActiEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
  calendarApi,
  conversEventsToDateEvents,
  onEvents,
} from "../index";

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);
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
      const { data } = await calendarApi.post("/events", calendarEvent);

      dispatch(onAddNewEvent({ ...calendarEvent, id: data.newEvent.id, user }));
    }
  };
  const starteleteEvente = () => {
    dispatch(onDeleteEvent());
  };
  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get("/events");
      const events = conversEventsToDateEvents(data.results);

      dispatch(onEvents(events));
    } catch (error) {
      console.log(`Error cargando eventos ${error}`);
    }
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
    startLoadingEvents,
  };
};
