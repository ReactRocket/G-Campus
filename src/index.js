import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// redux store 
import { Provider } from 'react-redux';
import store from "./app/store";

import Home from "./pages/Home";
import Error from "./pages/Error";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Courses from "./pages/Courses";
import Test from "./test"

import StudentDashboard, {
  sideBarFlag,
} from "./modules/student/pages/Dashboard";
import StudentHome from "./modules/student/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot",
        element: <Forgot />,
      },
    ],
  },
  {
    path: "/student",
    element: <StudentDashboard />,
    loader: sideBarFlag,
    children: [
      {
        path: "",
        element: <StudentHome />,
      },
    ],
  },

  // this is for testing purposes only
  {
    path: "/test",
    element: <Test />,
    loader: sideBarFlag,
    children: [
      {
        // path: "",
        // element: <StudentHome />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
