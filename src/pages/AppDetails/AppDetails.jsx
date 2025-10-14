import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { Download, Star, ThumbsUp } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { addToStoredDB } from "../../utility/addtoDB.JS";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();

  if (!Array.isArray(data)) return <p className="text-red-500">Data not loaded properly.</p>;

  const singleHook = data.find((app) => app.id === appId);
  if (!singleHook) return <p className="text-red-500 text-xl mt-10">App not found!</p>;

  const { description, title, image, companyName, downloads, ratingAvg, reviews, size, ratings } = singleHook;
  const [isSelected, setSelected] = useState(false);
  const sortedRatings = [...ratings].reverse();

  const handleInstall = (id) => {
    addToStoredDB(id);
    toast.success("App Installed Successfully!");
    setSelected(true);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 lg:gap-16">
        {/* Image */}
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <img
            src={image}
            alt={title}
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain rounded-3xl shadow-xl"
          />
        </div>

        {/* Info */}
        <div className="flex-1 w-full">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#632EE3]">
            {title}
          </h1>
          <p className="mt-1 sm:mt-2 text-gray-600 text-sm sm:text-base lg:text-lg">
            Developed by: {companyName}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6 mt-4 sm:mt-6 border-t-2 pt-4 sm:pt-5 lg:pt-6">
            <div className="grid gap-y-1.5 text-center w-20 sm:w-24 lg:w-32">
              <p className="text-[#00D390] flex justify-center">
                <Download size={22} />
              </p>
              <p className="text-xs sm:text-sm lg:text-base">Downloads</p>
              <h1 className="font-bold text-lg sm:text-2xl lg:text-3xl">
                {(downloads / 1000000).toFixed(1)}M
              </h1>
            </div>

            <div className="grid gap-y-1.5 text-center w-20 sm:w-24 lg:w-32">
              <p className="text-[#FF8811] flex justify-center">
                <Star size={22} />
              </p>
              <p className="text-xs sm:text-sm lg:text-base">Average Ratings</p>
              <h1 className="font-bold text-lg sm:text-2xl lg:text-3xl">{ratingAvg}</h1>
            </div>

            <div className="grid gap-y-1.5 text-center w-20 sm:w-24 lg:w-32">
              <p className="text-[#632EE3] flex justify-center">
                <ThumbsUp size={22} />
              </p>
              <p className="text-xs sm:text-sm lg:text-base">Total Reviews</p>
              <h1 className="font-bold text-lg sm:text-2xl lg:text-3xl">
                {(reviews / 1000).toFixed(1)}K
              </h1>
            </div>
          </div>

          {/* Install Button */}
          <div className="mt-4 sm:mt-6 lg:mt-8 w-full sm:w-auto">
            <button
              onClick={() => handleInstall(id)}
              disabled={isSelected}
              className={`${
                isSelected ? "bg-[#d37400]" : "bg-[#00D390] hover:bg-[#00b97a]"
              } text-white px-4 sm:px-6 py-2 sm:py-3 lg:px-8 lg:py-4 rounded-2xl font-semibold shadow-lg transition w-full sm:w-auto`}
            >
              {isSelected ? "Installed" : `Install Now (${size} MB)`}
            </button>
            <ToastContainer position="top-right" autoClose={2000} />
          </div>
        </div>
      </div>

      {/* Ratings Chart */}
      <div className="mt-8 sm:mt-12 lg:mt-16 w-full max-w-full sm:max-w-[700px] md:max-w-[1200px] lg:max-w-[1400px] mx-auto h-[250px] sm:h-[300px] lg:h-[350px]">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold mb-3 text-gray-800 sm:text-left">
          Ratings
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={sortedRatings}
            margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
          >
            <XAxis
              type="number"
              tickFormatter={(value) => (value >= 1000000 ? `${value / 1000000}M` : value)}
            />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fontSize: 12, fill: "#777" }}
              width={80}
            />
            <Tooltip
              formatter={(value) => value.toLocaleString("en-US")}
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
            />
            <Bar dataKey="count" fill="#FF8800" barSize={25} radius={[0, 12, 12, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Description */}
      <div className="mt-6 sm:mt-8 lg:mt-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Description</h1>
        <p className="text-sm sm:text-base lg:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
