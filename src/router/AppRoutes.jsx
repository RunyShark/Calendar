import { Route, Routes, Navigate } from "react-router-dom";
import { CalendarPages, LoginPage, ErrorRoute } from "../index";
export const AppRoutes = () => {
  const authStatus = "not-authenticate";

  return (
    <Routes>
      {authStatus === "not-authenticate" ? (
        <Route path="/" element={<LoginPage />} />
      ) : (
        <Route path="/" element={<CalendarPages />} />
      )}

      <Route path="*" element={<ErrorRoute />} />
    </Routes>
  );
};
