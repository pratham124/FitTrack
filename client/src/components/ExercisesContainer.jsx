import React, { useEffect } from "react";
import Wrapper from "../assets/wrappers/JobsContainer";
import Exercise from "./Exercise";
import PropTypes from "prop-types";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

const ExercisesContainer = ({ data }) => {
  const { exercises } = data;
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State to control the modal visibility
  const [exerciseId, setExerciseId] = useState(""); // State to store the id of the exercise to be deleted

  const handleDeleteClick = (id) => {
    setExerciseId(id);
    setShowDeleteModal(true);
  };

  const handeModalClose = () => {
    setExerciseId("");
    setShowDeleteModal(false);
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
        <DeleteModal exerciseId={exerciseId} onClose={handeModalClose} />
      )}
    </Wrapper>
  );
};

ExercisesContainer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ExercisesContainer;
