import React, { useEffect } from "react";
import Wrapper from "../assets/wrappers/JobsContainer";
import Exercise from "./Exercise";
import PropTypes from "prop-types";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import { toast } from "react-toastify";
import { customFetch } from "../utils/util";
import { useNavigate } from "react-router-dom";

const ExercisesContainer = ({ data }) => {
  const { exercises } = data;
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [exerciseId, setExerciseId] = useState("");
  const navigate = useNavigate();

  const handleDeleteClick = (id) => {
    setExerciseId(id);
    setShowDeleteModal(true);
  };

  const handleModalClose = () => {
    setExerciseId("");
    setShowDeleteModal(false);
  };

  const handleModalDelete = async (id) => {
    try {
      await customFetch.delete(`/exercise/${id}`);
      toast.success("Exercise deleted successfully.");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
    setShowDeleteModal(false);
    setExerciseId("");
    navigate("/dashboard/all-exercises");
  };

  if (exercises.length === 0) {
    return (
      <Wrapper>
        <h2>No Exercises</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="jobs">
        {exercises.map((exercise) => {
          return (
            <Exercise
              key={exercise._id}
              {...exercise}
              onDeleteClick={() => handleDeleteClick(exercise._id)}
            ></Exercise>
          );
        })}
      </div>
      {showDeleteModal && (
        <DeleteModal
          exerciseId={exerciseId}
          onClose={handleModalClose}
          onDelete={() => handleModalDelete(exerciseId)}
        />
      )}
    </Wrapper>
  );
};

ExercisesContainer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ExercisesContainer;
