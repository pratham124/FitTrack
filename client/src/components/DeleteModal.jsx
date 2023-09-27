import React from "react";
import { Form } from "react-router-dom";
import styled from "styled-components";
import { customFetch } from "../utils/util";
import { toast } from "react-toastify";

const DeleteModal = ({ exerciseId, onClose, onDelete }) => {
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

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);

  .modal {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--background-secondary-color);
    width: fit-content;
    height: fit-content;
    padding: 3rem 1.5rem;
    border-radius: 0.5rem;
    gap: 2rem;
  }

  .main-text {
    font-size: 1rem;
    font-weight: 500;
  }

  .info-text {
    font-size: 0.8rem;
    color: var(--text-secondary-color);
  }

  .btn-container {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }

  .cancel-btn {
    background: var(--background-secondary-color);
    color: var(--primary-500);
    border: 1px solid var(--primary-500);
  }
`;

export default DeleteModal;
