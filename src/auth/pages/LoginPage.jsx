import { useForm } from "../../index";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";
const login = {
  email: "",
  password: "",
};
const registro = {
  name: "",
  registerEmail: "",
  registerPassword: "",
  registerPassword2: "",
};
export const LoginPage = () => {
  const {} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { formState, email, password, onInputChange } = useForm(login);
  const {
    formState: formStateRegister,
    name,
    registerEmail,
    registerPassword,
    registerPassword2,
    onInputChange: onInputChangeRegister,
  } = useForm(registro);

  const onSubmitLogin = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  const onSubmitRegister = (event) => {
    event.preventDefault();
    console.log(formStateRegister);
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={onSubmitLogin}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </div>
            <div className="d-grid gap-2">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={onSubmitRegister}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="name"
                value={name}
                onChange={onInputChangeRegister}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="registerEmail"
                value={registerEmail}
                onChange={onInputChangeRegister}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="registerPassword"
                value={registerPassword}
                onChange={onInputChangeRegister}
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="registerPassword2"
                value={registerPassword2}
                onChange={onInputChangeRegister}
              />
            </div>

            <div className="d-grid gap-2">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
