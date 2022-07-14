import { Calendar } from "react-big-calendar";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours } from "date-fns";
import { Navbar, localizer, getMessagesEs } from "../../index";

const eventeStyleGetter = (event, start, end, isSelected) => {
  console.log({ event, start, end, isSelected });

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
  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={getMessagesEs()}
        eventPropGetter={eventeStyleGetter}
      />
    </>
  );
};
