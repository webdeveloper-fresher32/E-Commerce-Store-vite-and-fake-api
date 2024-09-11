import React from "react";
import { Alert } from "@mui/material";

interface PopupProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ open, message, onClose }) => {
  return open ? (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 9999,
      }}
    >
      <Alert variant="filled" severity="success" onClose={onClose}>
        {message}
      </Alert>
    </div>
  ) : null;
};

export default Popup;
