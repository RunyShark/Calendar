import { useNavigate } from "react-router-dom";

export const ErrorRoute = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>La ruta no existe</h1>
      <button onClick={() => navigate("/")}>Volver a una ruta valida</button>
    </>
  );
};
