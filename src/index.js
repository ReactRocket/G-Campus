import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// redux store
import { Provider } from "react-redux";
import store from "./app/store";

import Home from "./pages/Home";
import Error from "./pages/Error";
// import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

import Courses from "./pages/Courses";
import Bca from './pages/Bca'
import Bcom from './pages/Bcom'
import Business from './pages/Business'

import Register from "./pages/Register"

import StudentDashboard, {
  sideBarFlag,
} from "./modules/student/pages/Dashboard";
import StudentHome from "./modules/student/pages/Home";
import Registration from "./pages/test/Registration";

import AdminDashboard from "./modules/admin/pages/Dashboard";
import Main from "./modules/admin/pages/Main";
import Student from "./modules/admin/pages/Student";
import Faculty from "./modules/admin/pages/Faculty";
import Notice from "./modules/admin/pages/Notice";
import Feedback from "./modules/admin/pages/Feedback";
import Gallery from "./modules/admin/pages/Gallery";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot",
        element: <Forgot />,
      },
      {
        path: "/test",
        element: <Registration />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/bca",
        element: <Bca />,
      },
      {
        path: "/courses/bcom",
        element: <Bcom />,
      },
      {
        path: "/courses/bba",
        element: <Business />,
      }
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
  {
    path: "/admin",
    element: <AdminDashboard />,
    // loader: onLoadAdminAuth,
    children: [
      {
        index: "admin",
        element: <Main />,
      },
      {
        path: "student",
        element: <Student />,
      },
      {
        path: "faculty",
        element: <Faculty />,
      },
      {
        path: "notice",
        element: <Notice />,
      },
      {
        path: "feedback",
        element: <Feedback />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
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
