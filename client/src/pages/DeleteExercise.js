import { toast } from "react-toastify"
import { customFetch } from "../utils/util"
import { redirect } from "react-router-dom"

export const action = async ({ params }) => {
  try {
    await customFetch.delete(`/exercise/${params.id}`)
    toast.success("Exercise deleted successfully")
  } catch (e) {
    toast.error("Something went wrong")
  }
  return redirect("/dashboard/all-exercises")
}