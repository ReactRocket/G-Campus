import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(false);
  const [MoreOptionToggle, setMoreOptionToggle] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setLoading(true);
    setMoreOptionToggle(false);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [pathname]);

  return (
    <>
      {loading && <Loader loading={loading} />}
      <ScrollToTop />
      <Navbar
        NavLink={NavLink}
        MoreOptionToggle={MoreOptionToggle}
        setMoreOptionToggle={setMoreOptionToggle}
      />
      <Outlet className="overflow-hidden" />
      <Footer
        NavLink={NavLink}
        MoreOptionToggle={MoreOptionToggle}
        setMoreOptionToggle={setMoreOptionToggle}
      />
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
  {
    id: "05",
    name: "More",
    link: [
      { Step: "/step" },
      { "Cell/Club": "/club" },
      { "Student Corner": "/student-corner" },
      // { News: "/news" },
      // { Events: "/event" },
      { Gallery: "/gallery" },
      // { Saptadhara: "/saptadhara" },
    ],
  },
];

export default App;
