import { Route, Routes, Navigate } from "react-router-dom";
import { CalendarPages, LoginPage } from "../index";
export const AppRoutes = () => {
  const authStatus = "not-authenticate";

  return (
    <Routes>
      {authStatus === "not-authenticate" ? (
        <Route path="/auth/login" element={<LoginPage />} />
      ) : (
        <Route path="/adelante" element={<CalendarPages />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
