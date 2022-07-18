import { useState } from "react";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  Navbar,
  localizer,
  getMessagesEs,
  CalendarEven,
  CalendarModal,
  useUIStore,
  useCalendarStore,
  FabAddNew,
  FabAddDelete,
} from "../../index";

export const CalendarPages = () => {
  const { events, setActiveEvent } = useCalendarStore();
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
    setActiveEvent(event);
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
      <FabAddNew />
      <FabAddDelete />
    </>
  );
};
