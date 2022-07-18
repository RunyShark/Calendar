import { addHours } from "date-fns";
import { useUIStore, useCalendarStore } from "../../index";

export const FabAddNew = () => {
  const { openDateModal } = useUIStore();
  const { setActiveEvent } = useCalendarStore();
  const handleOpenModal = () => {
    setActiveEvent({
      title: "",
      notes: "",
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: "#fafafa",
      user: {
        _id: "123",
        name: "Dario",
      },
    });
    openDateModal();
  };
  return (
    <button className="btn btn-primary fab" onClick={handleOpenModal}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
