import { CircleX, Menu, Github } from "lucide-react";
import logo from "./assets/logo.png";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const Links = (
    <>
      <Link to="/">
        <li
          className={`m-2 ${
            currentPath === "/"
              ? "text-[#7E3AF2] underline font-semibold"
              : "text-black hover:text-[#7E3AF2]"
          }`}
        >
          Home
        </li>
      </Link>
      <Link to="/apps">
        <li
          className={`m-2 ${
            currentPath === "/apps"
              ? "text-[#7E3AF2] underline font-semibold"
              : "text-black hover:text-[#7E3AF2]"
          }`}
        >
          Apps
        </li>
      </Link>
      <Link to="/installation">
        <li
          className={`m-2 ${
            currentPath === "/installation"
              ? "text-[#7E3AF2] underline font-semibold"
              : "text-black hover:text-[#7E3AF2]"
          }`}
        >
          Installation
        </li>
      </Link>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm mb-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <Link to="/">
          <a className="flex items-center">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <h3 className="ml-2 text-2xl font-semibold text-[#632EE3]">
              ZeroThree
            </h3>
          </a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end ">
        <a
          href="https://github.com/ZisanUlHaque"
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-3 rounded-xl text-white"
        >
          <Github /> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
