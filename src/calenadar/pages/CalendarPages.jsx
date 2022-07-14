import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours, format, parse, startOfWeek, getDay } from "date-fns";
import { Navbar } from "../../index";
const locales = {
  "en-US": enUS,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

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
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh -80px)" }}
      />
    </>
  );
};
