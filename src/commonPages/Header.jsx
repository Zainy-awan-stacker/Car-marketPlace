import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiLoginCircleFill } from "react-icons/ri";

import Navbar from "../commonPages/Navbar";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [active, setActive] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname.endsWith("/");
  return (
    <header
      className={`sticky top-0 z-20 
  ${active ? "bg-blue-500 shadow-sm py-0" : "py-0"}
  ${!isHomePage && "bg-primary"}`}
    >
      <div className="bg-sky-500">
        <div className="flex justify-between items-center  px-10">
          {/* LOGO */}
          
          <div className="spany-icon items-center relative">
             <img src="/images/cars.png" alt="car" className="car w-20"/>
             <span className="uppercase text-xs absolute top-15 font-serif font-bold">
              Rentify
            </span>
          </div>

          {/* NAVBAR */}
          <Navbar
            className="hidden lg:flex gap-6 md:hidden"
            setMenuOpened={setMenuOpened}
          />
          <div className="paint flex gap-10">
           <div className="search-sec flex relative ">
            <div
              className={`absolute right-1  transition-all duration-300 ease-in-out
          ring-1 ring-slate-900/10 bg-white rounded-full 
          ${showSearch ? "w-[260px] px-4 py-2 opacity-100" : "w-0 px-0 py-0 opacity-0"}`}
            >
              <input
                type="text"
                placeholder="Type here..."
                className=" text-sm outline-none"
              />
             
            </div>

            {/* SEARCH ICON */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className=" z-20 ring-1 ring-slate-900/10
    bg-white px-2 rounded-full"
            >
              <img src="/images/SSS.png" alt="search" className="h-5 w-5" />
            </button>
            </div>
          {/* RIGHT SIDE */}
          <div className="relative flex items-center justify-end gap-4 ">
          
            {/* MOBILE MENU */}
            <button
              className="lg:hidden"
              onClick={() => setMenuOpened(!menuOpened)}
            >
              <img
                src={menuOpened ? "/images/close.png" : "/images/menu.png"}
                alt="menu"
                className="h-5 w-5"
              />
            </button>
            <div>
              <button className="btn bg-black font-bold rounded-full text-white px-4 py-2 flex items-center gap-2">
                Login
                <RiLoginCircleFill />
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

