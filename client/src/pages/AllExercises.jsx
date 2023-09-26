import React from "react";
import SearchContainer from "../components/SearchContainer";
import ExercisesContainer from "../components/ExercisesContainer";
import { customFetch } from "../utils/util";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/exercise");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg || "Something went wrong.");
    return error;
  }
};

const AllExercises = () => {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <>
      <SearchContainer />
      <ExercisesContainer data={data} />
    </>
  );
};

export default AllExercises;
