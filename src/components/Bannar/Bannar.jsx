import React from "react";
import g_logo from "./assets/fi_16076057.png";
import p_logo from "./assets/fi_5977575.png";
import hero from "./assets/hero.png";

const Bannar = () => {
  return (
    <div className="mt-10 text-center">
      <div className="max-w-5xl mx-auto">
        <h1 className=" text-6xl font-semibold">
          We Build <br />{" "}
          <span className="font-bold text-[#632EE3]">Productive</span> Apps
        </h1>
        <p className="text-[#627382] mt-3">
          We craft innovative apps designed to make everyday life simpler,
          smarter, and more exciting.Our goal is to turn your ideas into digital
          experiences that truly make an impact.
        </p>
      </div>
      <div className="gap-3 flex justify-center mt-3">
        <button className="btn rounded-xl">
          <img src={g_logo} alt="" className="w-5 h-5" /> Google Play
        </button>
        <button className="btn rounded-xl">
          <img src={p_logo} alt="" className="w-5 h-5" /> App Store
        </button>
      </div>
      <div className="flex justify-center mt-5">
        <img src={hero} alt="" />
      </div>
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
        <h1 className="text-4xl font-bold pt-10">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex justify-center mt-5 pb-10 mx-2 md:mx-0  gap-5 md:gap-20">
          <div className="grid gap-y-2">
            <p>Total Downloads</p>
            <h1 className="text-3xl md:text-5xl font-bold">29.6M</h1>
            <p>21% more than last month</p>
          </div>
          <div className="grid gap-y-2">
            <p>Total Reviews</p>
            <h1 className="text-3xl md:text-5xl font-bold">906K</h1>
            <p>46% more than last month</p>
          </div>
          <div className="grid gap-y-2">
            <p>Active Apps</p>
            <h1 className="text-3xl md:text-5xl font-bold">132+</h1>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
