import { useAuthStore } from "../../index";

export const Navbar = () => {
  const { logout } = useAuthStore();

  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt"></i>
        &nbsp; Dario
      </span>
      <button className="btn btn-outline-danger" onClick={() => logout()}>
        <i className="fas fa-sign-out-alt"></i>
        <span>Salir</span>
      </button>
    </div>
  );
};
