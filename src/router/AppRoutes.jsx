import { Route, Routes, Navigate } from "react-router-dom";
import { CalendarPages, LoginPage, useAuthStore } from "../index";
export const AppRoutes = () => {
  const { status } = useAuthStore();
  const authStatus = status;

  return (
    <Routes>
      {authStatus === "checking" ? (
        <Route path="/auth/*" element={<LoginPage />} />
      ) : (
        <Route exact path="/*" element={<CalendarPages />} />
      )}

      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
