import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
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
    if (calendarEvent.id) {
      //*actualizo
      try {
        await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
        dispatch(onUpdateEvent({ ...calendarEvent, user }));
        return;
      } catch (error) {
        Swal.fire("error", `Error ${error}`, "error");
      }
    }
    try {
      const { data } = await calendarApi.post("/events", calendarEvent);
      dispatch(onAddNewEvent({ ...calendarEvent, id: data.newEvent.id, user }));
    } catch (error) {
      Swal.fire("error", `Error ${error}`, "error");
    }
  };

  const starteleteEvente = async () => {
    try {
      await calendarApi.delete(`/events/${activeEvent.id}`);
      dispatch(onDeleteEvent());
    } catch (error) {
      Swal.fire("error eliminar", `Error ${error}`, "error");
    }
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
