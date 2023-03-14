import { useEffect } from "react";
import styles from "./Modal.module.css";

function Modal({ onClose, children }) {
  useEffect(() => {
    // Add event listener for closing modal on Escape key press
    const handleEscapeKeyPress = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKeyPress);

    // Remove event listener on unmount
    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    // Close modal on clicking the backdrop
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
}

export default Modal;
