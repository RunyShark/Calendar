import { Route, Routes } from "react-router-dom";
import { CalendarPages, LoginPage } from "../index";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CalendarPages />} />
      <Route path="/auth/login" element={<LoginPage />} />
    </Routes>
  );
};
