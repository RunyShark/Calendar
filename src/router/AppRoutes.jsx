import { useEffect } from "react";

import { Route, Routes, Navigate } from "react-router-dom";
import { CalendarPages, LoginPage, useAuthStore } from "../index";
export const AppRoutes = () => {
  const { status, checkAuthToken } = useAuthStore();
  const authStatus = status;
  useEffect(() => {
    checkAuthToken();
  }, []);
  if (status === "checking") {
    return <h3>Cargando...</h3>;
  }
  return (
    <Routes>
      {authStatus === "not-authenticated" ? (
        <>
          <Route path="/auth/*" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          <Route exact path="/" element={<CalendarPages />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};
