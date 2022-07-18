import { useDispatch, useSelector } from "react-redux";
import {} from "../index";

export const useCalendarStore = () => {
  const { events } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  return {
    //*propiedades
    events,
    //*metodos
  };
};
