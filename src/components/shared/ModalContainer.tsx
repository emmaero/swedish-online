import reactDom from "react-dom";
import close from "../../assets/icons/button-close.png";

//@ts-ignore
export default function ModalContainer({ state }) {
  const [showModal, setShowModal] = state;
  //safeguard
  if (showModal === null) return null;

  return reactDom.createPortal(
    <>
      <div className="modal-background">
        <div className="modal-container">
          <button className="button-close" onClick={() => setShowModal(null)}>
            <img src={close} alt="close" />
          </button>
          {showModal}
        </div>
      </div>
    </>,
    //@ts-ignore
    document.getElementById("modal-root")
  );
}
