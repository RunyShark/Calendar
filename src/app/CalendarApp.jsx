import { AppRoutes } from "../index";
import { BrowserRouter } from "react-router-dom";
export const CalendarApp = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
