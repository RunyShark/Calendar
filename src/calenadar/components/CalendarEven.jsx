import React from "react";

export const CalendarEven = ({ event }) => {
  console.log("Calenadar Even", event);
  const { title, user } = event;
  return (
    <>
      <strong>{title}</strong>
      <span> - {user.name}</span>
    </>
  );
};
