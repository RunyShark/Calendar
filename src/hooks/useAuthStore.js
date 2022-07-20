import { useDispatch, useSelector } from "react-redux";
import { calendarApi, onLogin } from "../index";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    try {
      const { data } = await calendarApi.post("/auth", { email, password });
      const { token } = data.acount;
      const user = data.acount;
      localStorage.setItem("token", token);
      dispatch(onLogin(user));
    } catch (error) {
      const {
        response: {
          data: { errors },
        },
      } = error;
      console.log(errors);
    }
  };

  return {
    //*propiedades
    status,
    user,
    errorMessage,
    //*metodos
    startLogin,
  };
};
