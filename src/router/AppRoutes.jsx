import { Route, Routes, Navigate } from "react-router-dom";
import { CalendarPages, LoginPage } from "../index";
export const AppRoutes = () => {
  const authStatus = "not-authenticate";

  return (
    <Routes>
      <Route path="*" element={<CalendarPages />} />
      {authStatus === "not-authenticate" ? (
        <Route path="/auth/*" element={<LoginPage />} />
      ) : (
        <Route path="/adelante" element={<CalendarPages />} />
      )}
    </Routes>
  );
};
