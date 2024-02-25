import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [pathname]);

  return (
    <>
      {loading && <Loader />}
      <ScrollToTop />
      <Navbar NavLink={NavLink} />
      <Outlet className="overflow-hidden" />
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
