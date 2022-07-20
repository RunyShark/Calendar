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
      const { data } = await calendarApi.post("/auth/new", {
        name,
        email,
        password,
      });
      console.log(data);
      const { token } = data.newUser;
      localStorage.setItem("token", token);
      localStorage.setItem("token-init-date", new Date().getTime());
      const user = data.newUser;
      dispatch(onLogin(user));
    } catch (error) {
      const {
        response: {
          data: { errors },
        },
      } = error;

      dispatch(onLogout(errors[0].msg || "Error 404"));

      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("token-init-date");
    dispatch(onLogout());
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout());
    try {
      const { data } = await calendarApi.post("/auth/renew");
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin({ name, uid }));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
    }
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
    checkAuthToken,
  };
};
