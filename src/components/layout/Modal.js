import { useEffect } from "react";
import classes from "./Modal.module.css";

function Modal({ onClose, children }) {
  useEffect(() => {
    // Dodaje event listener za zatvaranje kad se pritisne escape
    const handleEscapeKeyPress = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKeyPress);

    // Skida event listener kad se unmountuje
    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    // Zatvara ga na klik za background
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={classes.backdrop} onClick={handleBackdropClick}>
      <div className={classes.modal}>{children}</div>
    </div>
  );
}

export default Modal;
