import { useState } from "react";
import { addHours } from "date-fns";
import Modal from "react-modal/lib/components/Modal";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import "./modal.css";
import { differenceInSeconds } from "date-fns/esm";
registerLocale("es", es);
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
  const [formState, setFormState] = useState({
    fechaInicio: new Date(),
    fechaFin: addHours(new Date(), 2),
    title: "",
    notes: "",
  });

  const { fechaInicio, fechaFin, title, notes } = formState;
  const onCloseModal = () => {
    setIsOpen(false);
  };

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const onDateChanged = (event, changing) => {
    setFormState({
      ...formState,
      [changing]: event,
    });
  };
  const hadleSubmit = (event) => {
    event.preventDefault();
    const difference = differenceInSeconds(fechaFin, fechaInicio);
    if (difference <= 0 || isNaN(difference)) {
      console.log("Error en fechas");
      return;
    }
    if (title.length <= 0) {
      console.log("Error titulo es un campo obligatorio");
      return;
    }
    console.log(formState);
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
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={hadleSubmit}>
        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          <DatePicker
            selected={fechaInicio}
            className="form-control"
            onChange={(event) => onDateChanged(event, "fechaInicio")}
            dateFormat="Pp"
            showTimeSelect
            locale="es"
            timeCaption="Hora"
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <DatePicker
            minDate={fechaInicio}
            selected={fechaFin}
            className="form-control"
            onChange={(event) => onDateChanged(event, "fechaFin")}
            dateFormat="Pp"
            showTimeSelect
            locale="es"
            timeCaption="Hora"
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título del evento"
            value={title}
            name="title"
            autoComplete="off"
            onChange={onInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            value={notes}
            name="notes"
            onChange={onInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
