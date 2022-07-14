import { Route, Routes, Navigate } from "react-router-dom";
import { CalendarPages, LoginPage } from "../index";
export const AppRoutes = () => {
  const authStatus = "not-authenticate";

  return (
    <Routes>
      {authStatus === "authenticate" ? (
        <Route path="/auth/*" element={<LoginPage />} />
      ) : (
        <Route exact path="/*" element={<CalendarPages />} />
      )}

      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
