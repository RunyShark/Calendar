import { Route, Routes, Navigate } from "react-router-dom";
import { CalendarPages, LoginPage, ErrorRoute } from "../index";
export const AppRoutes = () => {
  const authStatus = "not-authenticate";

  return (
    <Routes>
      <Route exact path="/" element={<CalendarPages />} />
      <Route path="/auth" element={<LoginPage />} />
      <Route path="*" element={<ErrorRoute />} />
    </Routes>
  );
};
