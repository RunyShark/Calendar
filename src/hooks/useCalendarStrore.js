import { useDispatch, useSelector } from "react-redux";
import { onSetActiEvent } from "../index";

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiEvent(calendarEvent));
  };
  return {
    //*propiedades
    activeEvent,
    events,
    //*metodos
    setActiveEvent,
  };
};
