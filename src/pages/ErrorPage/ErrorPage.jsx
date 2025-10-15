import React from "react";
import img from "./asset/error-404.png";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="mt-10 mb-12">
      <img src={img} alt="" className="flex mx-auto justify-center" />
      <div className="text-center mt-5 grid gap-2">
        <h1 className="font-bold text-4xl">Oops, page not found!</h1>
        <p>The page you are looking for is not available.</p>
        <div>
          <Link to={'./'}>
            <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-xl btn">
              Go Back!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
