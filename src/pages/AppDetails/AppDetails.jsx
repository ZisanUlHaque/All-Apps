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

  // Check if data is valid array
  if (!Array.isArray(data)) {
    return <p className="text-red-500">Data not loaded properly.</p>;
  }

  const singleHook = data.find((app) => app.id === appId);

  // Handle invalid appId
  if (!singleHook) {
    return <p className="text-red-500 text-xl mt-10">App not found!</p>;
  }

  const {
    description,
    title,
    image,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
  } = singleHook;

  const [isSelected, setSelected] =useState (false);
  const sortedRatings = [...ratings].reverse();

  const handleInstall = (id) => {
    addToStoredDB(id);
    toast.success("App Installed Successfully!");
    setSelected(true);
  };

  return (
    <div className="p-8">
      {/* App Header */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div>
          <img
            src={image}
            alt={title}
            className="w-[250px] h-[250px] object-contain rounded-2xl shadow-md"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-[#632EE3]">{title}</h1>
          <p className="mt-2 text-gray-600">Developed by: {companyName}</p>

          <div className="flex flex-wrap items-center gap-10 mt-6 border-t-2 pt-5">
            <div className="grid gap-y-1.5 text-center">
              <p className="text-[#00D390] flex justify-center">
                <Download />
              </p>
              <p>Downloads</p>
              <h1 className="font-bold text-3xl">
                {(downloads / 1000000).toFixed(1)}M
              </h1>
            </div>

            <div className="grid gap-y-1.5 text-center">
              <p className="text-[#FF8811] flex justify-center">
                <Star />
              </p>
              <p>Average Ratings</p>
              <h1 className="font-bold text-3xl">{ratingAvg}</h1>
            </div>

            <div className="grid gap-y-1.5 text-center">
              <p className="text-[#632EE3] flex justify-center">
                <ThumbsUp />
              </p>
              <p>Total Reviews</p>
              <h1 className="font-bold text-3xl">
                {(reviews / 1000).toFixed(1)}K
              </h1>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => handleInstall(id)}
              disabled={isSelected}
              className={`${
                isSelected
                  ? "bg-[#d37400]"
                  : "bg-[#00D390] hover:bg-[#00b97a]"
              } text-white px-6 py-3 rounded-xl font-semibold shadow-md transition`}
            >
              {isSelected ? "Installed" : `Install Now (${size} MB)`}
            </button>
            <ToastContainer position="top-right" autoClose={2000} />
          </div>
        </div>
      </div>

      {/* Ratings Chart */}
      <div className="mt-12 mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ratings</h2>
        <div className="w-full max-w-[1200px] mx-auto ml-0 h-[250px] sm:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={sortedRatings}
              margin={{ top: 10, right: 30, bottom: 10 }}
            >
              <XAxis
                type="number"
                tickFormatter={(value) =>
                  value >= 1000000 ? `${value / 1000000}M` : value
                }
              />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fontSize: 12, fill: "#777" }}
                width={70}
              />
              <Tooltip
                formatter={(value) => value.toLocaleString("en-US")}
                cursor={{ fill: "rgba(0,0,0,0.05)" }}
              />
              <Bar
                dataKey="count"
                fill="#FF8800"
                barSize={20}
                radius={[0, 10, 10, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8">
        <h1 className="text-3xl font-bold">Description</h1>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
