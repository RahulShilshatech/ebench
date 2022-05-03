import React from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export default ({ open, onClose, classNames, children }) => (
  <Modal open={open} onClose={onClose} classNames={classNames}>
    {children}
  </Modal>
);
