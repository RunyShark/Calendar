import { Route, Routes } from "react-router-dom";
import { CalendarPages, LoginPage } from "../index";
export const AppRoutes = () => {
  const authStatus = "not-authenticate";

  return (
    <Routes>
      {/* {authStatus === "not-authenticate" ? (
        <Route path="/auth/login" element={<LoginPage />} />
      ) : (
        <Route path="/" element={<CalendarPages />} />
      )} */}

      <Route path="/auth/*" element={<LoginPage />} />
      <Route path="/" element={<CalendarPages />} />
    </Routes>
  );
};
