import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar NavLink={NavLink} />
      <Outlet />
      <Footer NavLink={NavLink} />
    </>
  );
}

const NavLink = [ 
  {
    id: "01",
    name: "Home",
    link: "/",
  },
  {
    id: "02",
    name: "Courses",
    link: "/courses",
  },
  {
    id: "03",
    name: "About",
    link: "/about",
  },
  {
    id: "04",
    name: "Contact",
    link: "/contact",
  },
];

export default App;
