import { parseISO } from "date-fns";

export const conversEventsToDateEvents = (events = []) => {
  return events.map((events) => {
    events.start = parseISO(events.start);
    events.end = parseISO(events.end);

    return events;
  });
};
