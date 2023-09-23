import React from "react";
import SearchContainer from "../components/SearchContainer";
import ExercisesContainer from "../components/ExercisesContainer";
import { customFetch } from "../utils/util";

export const loader = async () => {
  try {
    const { data } = customFetch.get("/");
  } catch (error) {
    console.log(error);
  }
};

const AllExercises = () => {
  return (
    <>
      <SearchContainer />
      <ExercisesContainer />
    </>
  );
};

export default AllExercises;
