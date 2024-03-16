import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// redux store
import { Provider } from "react-redux";
import store from "./app/store";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Courses from "./pages/Courses";
import Register from "./pages/Register";
import SignUpMessage from "./pages/test/SignUpMessage";

//more pages
import Club from "./pages/more/Club";
import Event from "./pages/more/Event";
import Gallery from "./pages/more/Gallery";
import News from "./pages/more/News";
import Saptadhara from "./pages/more/Saptadhara";
import Step from "./pages/more/Step";
import StudentCorner from "./pages/more/StudentCorner";

// student
import StudentDashboard from "./modules/student/pages/Dashboard";
import StudentHome from "./modules/student/pages/Home";
import Document from "./modules/student/pages/Document";
import Exam from "./modules/student/pages/Exam";
import Payment from "./modules/student/pages/Payment";
import Report from "./modules/student/pages/Report";

// admin
import AdminDashboard from "./modules/admin/pages/Dashboard";
import Main from "./modules/admin/pages/Main";
import Student from "./modules/admin/pages/Student";
import Faculty from "./modules/admin/pages/Faculty";
import Notice from "./modules/admin/pages/Notice";
import Feedback from "./modules/admin/pages/Feedback";
import Department from "./modules/admin/pages/Department";
import Error from "./modules/admin/pages/Error";
// import Gallery from "./modules/admin/pages/Gallery";

// errors
import NotFound from "./errors/Error_404";
import NetworkIssue from "./errors/NetworkIssue";

//  Courses
import Bca from "./pages/Bca";
import Business from "./pages/Business";
import Bcom from "./pages/Bcom";
import Verification from "./modules/admin/components/Verification";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: loader,
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
        path: "/courses/bca",
        element: <Bca />,
      },
      {
        path: "/courses/bba",
        element: <Business />,
      },
      {
        path: "/courses/bcom",
        element: <Bcom />,
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

      // more pages
      {
        path: "/club",
        element: <Club />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/saptadhara",
        element: <Saptadhara />,
      },
      {
        path: "/step",
        element: <Step />,
      },
      {
        path: "/student-corner",
        element: <StudentCorner />,
      },
    ],
  },
  {
    path: "/signupmessage",
    element: <SignUpMessage />,
  },
  {
    path: "/student",
    element: <StudentDashboard />,
    children: [
      {
        path: "",
        element: <StudentHome />,
      },
      {
        path: "documents",
        element: <Document />,
      },
      {
        path: "reports",
        element: <Report />,
      },
      {
        path: "exams",
        element: <Exam />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
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
        path: "student/verify",
        element: <Verification />,
      },
      {
        path: "faculty",
        element: <Faculty />,
        // loader: facultyLoader,
      },
      {
        path: "notice",
        element: <Notice />,
      },
      {
        path: "feedback",
        element: <Feedback />,
        // loader: loadData,
      },
      {
        path: "department",
        element: <Department />,
      },
      {
        path: "error",
        element: <Error />,
      },
    ],
  },
  {
    path: "/network",
    element: <NetworkIssue />,
  },
  {
    path: "*",
    element: <NotFound />,
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
