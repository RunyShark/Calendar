import { useState } from "react";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours } from "date-fns";
import {
  Navbar,
  localizer,
  getMessagesEs,
  CalendarEven,
  CalendarModal,
  useUIStore,
} from "../../index";

const events = [
  {
    title: "Cumpleaños",
    notes: "Pastel",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "Dario",
    },
  },
];

export const CalendarPages = () => {
  const { openDateModal } = useUIStore();
  const [lastView, setLastView] = useState(
    localStorage.getItem("lasView") || "week"
  );
  const eventeStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };
    return {
      style,
    };
  };
  const onDobleClick = (event) => {
    openDateModal();
  };
  const onSelect = (event) => {
    console.log({ click: event });
  };
  const onViewChaged = (event) => {
    localStorage.setItem("lasView", event);
  };
  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={getMessagesEs()}
        eventPropGetter={eventeStyleGetter}
        components={{
          event: CalendarEven,
        }}
        onDoubleClickEvent={onDobleClick}
        onSelectEvent={onSelect}
        onView={onViewChaged}
      />
      <CalendarModal />
    </>
  );
};
