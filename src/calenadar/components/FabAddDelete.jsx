import { useCalendarStore } from "../../index";

export const FabAddDelete = () => {
  const { starteleteEvente, hasEventSelected } = useCalendarStore();
  const handleDelete = () => {
    starteleteEvente();
  };
  return (
    <button
      className="btn btn-danger fab-danger"
      style={{ display: hasEventSelected ? "" : "none" }}
      onClick={handleDelete}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
