import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  DashBoardLayout,
  Error,
  Landing,
  Login,
  Register,
  Analysis,
  Chatbot,
  FeelBetter,
  Test,
  Therapist,
} from "./pages";

import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

const isDarkEnabled = checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashBoardLayout isDarkEnabled={isDarkEnabled} />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Analysis />,
      },
      {
        path: "test",
        element: <Test />,
      },
      {
        path: "therapist",
        element: <Therapist />,
      },
      {
        path: "feelbetter",
        element: <FeelBetter />,
      },
      {
        path: "analysis",
        element: <Analysis />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
