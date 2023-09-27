import React from "react";
import Wrapper from "../assets/wrappers/Modal";

const DeleteModal = ({ onClose, onDelete }) => {
  return (
    <Wrapper>
      <div className="modal">
        <span className="main-text">
          Are you sure you want to delete this exercise?
        </span>
        <span className="info-text">
          This will delete this exercise permanently. You cannot undo this
          action.
        </span>
        <div className="btn-container">
          <button type="button" className="btn cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default DeleteModal;
