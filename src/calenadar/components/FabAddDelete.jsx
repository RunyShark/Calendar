import { useCalendarStore } from "../../index";

export const FabAddDelete = () => {
  const { deleteEvente } = useCalendarStore();
  const handleDelete = () => {
    deleteEvente();
  };
  return (
    <button className="btn btn-danger fab-danger" onClick={handleDelete}>
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
