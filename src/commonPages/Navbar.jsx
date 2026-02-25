import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ setMenuOpened, className }) => {
  const navLinks = [
    { path: "/", title: "Home" },
    { path: "/listing", title: "Listing" },
    { path: "blog", title: "blog" },
    { path: "contact", title: "Contact" },
  ];
  const handleClick = (e) => {
    //  e.preventDefault()
    setMenuOpened(false);
    // window.scrollTo(0, 0);
  };
  return (
    <nav className="">
      {navLinks.map((link) => (
        <NavLink
          onClick={()=>handleClick()}
          key={link.title}
          to={link.path}
          className={({ isActive }) => `${isActive ? "active-link" : ""}
        px-3 py-2 rounded-full uppercase text-sm font-bold`}
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
