import { Route, Routes, Navigate } from "react-router-dom";
import { CalendarPages, LoginPage, useAuthStore } from "../index";
export const AppRoutes = () => {
  const { status } = useAuthStore();
  const authStatus = status;

  if (status === "checking") {
    return <h3>Cargando...</h3>;
  }
  return (
    <Routes>
      {authStatus === "not-authenticated" ? (
        <Route path="/auth/*" element={<LoginPage />} />
      ) : (
        <Route exact path="/*" element={<CalendarPages />} />
      )}

      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
