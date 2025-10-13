import { CircleX, Menu } from "lucide-react";
import React, { useState } from "react";
import { Github } from 'lucide-react';
import logo from './assets/logo.png';

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/home",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Installation",
    path: "/services",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navLink = navLinks.map((route) => (
    <li className="mr-5  ml-2 md:ml-0 md:mr-10">
      <a href="">{route.name}</a>
    </li>
  ));
  return (
    <div className="shadow-xl pb-3">
      <nav className="flex justify-between mx-10 mt-5">
        <span className="flex items-center mr-2" onClick={() => setOpen(!open)}>
          {open ? (
            <CircleX className="md:hidden"></CircleX>
          ) : (
            <Menu className="md:hidden"></Menu>
          )}

          <ul
            className={`md:hidden absolute duration-1000 bg-white ${
              open ? "top-12" : "-top-40"
            }`}
          >
            {navLink}
          </ul>
          <div className="flex items-center">
            <img src={logo} alt="" className="w-10 h-10"/>
            <h3 className="ml-2 text-2xl font-semibold text-[#632EE3]">ZeroThree</h3>
          </div>
        </span>
        <ul className="hidden md:flex">{navLink}</ul>
        <div className=" bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-3 rounded-xl">
            <button className="flex items-center gap-1.5  text-white"><Github /> Contribute</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;