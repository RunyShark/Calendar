import { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import "./modal.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
export const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const onCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1>Hola munde</h1>
      <hr />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic soluta
        accusamus debitis! Fugit nulla voluptates quidem sunt quos ea tempora
        dignissimos alias libero, accusantium dolores molestias aperiam ducimus
        mollitia. Ullam!
      </p>
    </Modal>
  );
};
