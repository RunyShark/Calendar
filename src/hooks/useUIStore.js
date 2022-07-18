import { useSelector, useDispatch } from "react-redux";
import { onCloseDateModal, onOpenDateModal } from "../index/index";

export const useUIStore = () => {
  const { isDateModalOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const openDateModal = () => {
    dispatch(onOpenDateModal());
  };
  const closeDateModal = () => {
    dispatch(onCloseDateModal());
  };
  return {
    //*Propiedades
    isDateModalOpen,
    //*Metodos
    openDateModal,
    closeDateModal,
  };
};
