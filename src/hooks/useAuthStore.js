import { useDispatch, useSelector } from "react-redux";
import {
  calendarApi,
  onLogin,
  onChecking,
  onLogout,
  clearErrorMessage,
} from "../index";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await calendarApi.post("/auth", { email, password });
      const { token, uid, name } = data.acount;
      localStorage.setItem("token", token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin({ name, uid }));
    } catch (error) {
      dispatch(onLogout("Credenciales incorrectas"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };
  const startRegister = async ({ name, email, password }) => {
    try {
      console.log({ name, email, password });
      const { data } = await calendarApi.post("/new", {
        name,
        email,
        password,
      });
      console.log(data);
      const { token } = data.acount;

      localStorage.setItem("token", token);
      const user = data.acount;
      dispatch(onLogin(user));
    } catch (error) {}
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("token-init-date");
    dispatch(onLogout());
  };

  return {
    //*propiedades
    status,
    user,
    errorMessage,
    //*metodos
    startLogin,
    logout,
    startRegister,
  };
};
