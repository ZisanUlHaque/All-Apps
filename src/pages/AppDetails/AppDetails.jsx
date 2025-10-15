import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import { Download, Star, ThumbsUp } from "lucide-react";
import { ToastContainer } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { addToStoredDB, getStroedApp } from "../../utility/AddToDB";
import "react-toastify/dist/ReactToastify.css";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();

  if (!Array.isArray(data))
    return <p className="text-red-500">Data not loaded properly.</p>;

  const singleHook = data.find((app) => app.id === appId);
  if (!singleHook)
    return <p className="text-red-500 text-xl mt-10">App not found!</p>;

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

  const [isSelected, setSelected] = useState(false);
  const sortedRatings = [...ratings].reverse();

  useEffect(() => {
    const storedApps = getStroedApp().map((id) => parseInt(id));
    if (storedApps.includes(appId)) {
      setSelected(true);
    }
  }, [appId]);

  const handleInstall = (id, title) => {
    addToStoredDB(id, title);
    setSelected(true);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 lg:gap-16">
        {/* App Image */}
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <img
            src={image}
            alt={title}
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain rounded-3xl shadow-xl"
          />
        </div>

        {/* App Info */}
        <div className="flex-1 w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-[#632EE3]">
            {title}
          </h1>
          <p className="mt-2 text-gray-600 text-base">
            Developed by: {companyName}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mt-6 border-t-2 pt-5">
            <div className="text-center w-24">
              <p className="text-[#00D390] flex justify-center">
                <Download size={22} />
              </p>
              <p className="text-sm">Downloads</p>
              <h1 className="font-bold text-2xl">
                {(downloads / 1000000).toFixed(1)}M
              </h1>
            </div>

            <div className="text-center w-24">
              <p className="text-[#FF8811] flex justify-center">
                <Star size={22} />
              </p>
              <p className="text-sm">Average Ratings</p>
              <h1 className="font-bold text-2xl">{ratingAvg}</h1>
            </div>

            <div className="text-center w-24">
              <p className="text-[#632EE3] flex justify-center">
                <ThumbsUp size={22} />
              </p>
              <p className="text-sm">Total Reviews</p>
              <h1 className="font-bold text-2xl">
                {(reviews / 1000).toFixed(1)}K
              </h1>
            </div>
          </div>

          {/* Install Button */}
          <div className="mt-6">
            <button
              onClick={() => handleInstall(appId, title)}
              disabled={isSelected}
              className={`${
                isSelected
                  ? "bg-[#d37400] cursor-not-allowed"
                  : "bg-[#00D390] hover:bg-[#00b97a]"
              } text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition`}
            >
              {isSelected ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>

      {/* Ratings Chart */}
      <div className="mt-10 w-full max-w-4xl mx-auto h-[300px]">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Ratings</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={sortedRatings}
            margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
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
              width={80}
            />
            <Tooltip
              formatter={(value) => value.toLocaleString("en-US")}
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
            />
            <Bar
              dataKey="count"
              fill="#FF8800"
              barSize={25}
              radius={[0, 12, 12, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Description */}
      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-2">Description</h1>
        <p className="text-lg">{description}</p>
      </div>

      {/* Toast */}
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
};

export default AppDetails;
