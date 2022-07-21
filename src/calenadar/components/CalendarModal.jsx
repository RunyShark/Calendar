import { useState, useMemo, useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addHours } from "date-fns";
import Modal from "react-modal/lib/components/Modal";
import "./modal.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import es from "date-fns/locale/es";
import { differenceInSeconds } from "date-fns/esm";
import { useUIStore, useCalendarStore } from "../../index";

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
  const { closeDateModal, isDateModalOpen } = useUIStore();
  const { startSavingEvent, activeEvent } = useCalendarStore();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    title: "",
    notes: "",
    start: new Date(),
    end: addHours(new Date(), 2),
  });
  const { title, notes, start, end } = formState;

  const titleClass = useMemo(() => {
    if (!formSubmitted) return "";
    return title.length === 0 ? "is-invalid" : "";
  }, [title, formSubmitted]);

  useEffect(() => {
    if (activeEvent) {
      setFormState({ ...activeEvent });
    }
  }, [activeEvent]);
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
  const hadleSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    const difference = differenceInSeconds(end, start);
    if (difference <= 0 || isNaN(difference)) {
      Swal.fire("Fechas", "Revisar las fechas ingresadas", "error");
      return;
    }
    if (title.length <= 0) {
      Swal.fire("Titulo", "Titulo es un campo obligatorio", "error");
      return;
    }

    await startSavingEvent(formState);
    closeDateModal();
    setFormSubmitted(false);
  };
  return (
    <Modal
      isOpen={isDateModalOpen}
      onRequestClose={() => closeDateModal()}
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
            selected={start}
            className="form-control"
            onChange={(event) => onDateChanged(event, "start")}
            dateFormat="Pp"
            showTimeSelect
            locale="es"
            timeCaption="Hora"
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <DatePicker
            minDate={start}
            selected={end}
            className="form-control"
            onChange={(event) => onDateChanged(event, "end")}
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
            className={`form-control ${titleClass}`}
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
