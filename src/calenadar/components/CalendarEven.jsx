import React from "react";

export const CalendarEven = ({
  event: {
    title,
    notes,
    start,
    end,
    bgColor,
    user: { name, id },
  },
}) => {
  return (
    <>
      <strong>{title}</strong>
      <span> - {name}</span>
      <p>{notes}</p>
    </>
  );
};
