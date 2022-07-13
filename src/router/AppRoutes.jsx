import { Route, Routes, Navigate } from "react-router-dom";
import { CalendarPages, LoginPage } from "../index";
export const AppRoutes = () => {
  const authStatus = "not-authenticate";

  return (
    <Routes>
      {authStatus === "not-authenticate" ? (
        <Navigate to="/login" />
      ) : (
        <Route path="/adelante" element={<CalendarPages />} />
      )}
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
