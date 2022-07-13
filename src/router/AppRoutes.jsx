import { Route, Routes, Navigate } from "react-router-dom";
import { CalendarPages, LoginPage } from "../index";
export const AppRoutes = () => {
  const authStatus = "authenticate";

  return (
    <>
      <Routes>
        {!authStatus === "not-authenticate" ? (
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        ) : (
          <Route path="/*" element={<Navigate to="/adelante" />} />
        )}
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/adelante" element={<CalendarPages />} />
      </Routes>
    </>
  );
};
