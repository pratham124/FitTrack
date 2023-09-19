import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import WeightTracker from "./pages/WeightTracker";
import AllExercises from "./pages/AllExercises";
import AddExercise from "./pages/AddExercise";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "admin",
            elment: <Admin />,
          },
          {
            path: "weight-track",
            element: <WeightTracker />,
          },
          {
            path: "all-exercises",
            element: <AllExercises />,
          },
          {
            path: "add-exercise",
            element: <AddExercise />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
