import React from "react";
import SearchContainer from "../components/SearchContainer";
import ExercisesContainer from "../components/ExercisesContainer";
import { customFetch } from "../utils/util";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

export const loader = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    console.log(params);
    const { data } = await customFetch.get("/exercise", { params });
    return { data, params };
  } catch (error) {
    toast.error(error?.response?.data?.msg || "Something went wrong.");
    return error;
  }
};

const AllExercises = () => {
  const { data, params } = useLoaderData();
  console.log(data);

  return (
    <>
      <SearchContainer data={data} params={params} />
      <ExercisesContainer data={data} />
    </>
  );
};

export default AllExercises;
