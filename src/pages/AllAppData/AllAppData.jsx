import React, { Suspense, useState } from "react";
import AllApp from "../AllApp/AllApp";

const AllAppData = ({ data }) => {
  const [search, setSearch] = useState("");

  const term = search.trim().toLowerCase();

  const searchApp = term
    ? data.filter((app) =>
        app.title.toLowerCase().includes(term)
      )
    : data;

  return (
    <div className="text-center mt-10 mx-auto mb-10">
      <h1 className="text-4xl font-bold">Our All Applications</h1>
      <p>
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      {/* Header with Search */}
      <div className="flex justify-between mx-5 mt-5 flex-col md:flex-row gap-3">
        <h1 className="font-bold text-2xl">
          App Found: {searchApp.length}
        </h1>

        <label className="input flex items-center gap-2 border rounded-lg px-3 py-2">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search apps..."
            className="outline-none w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      {/* Display apps */}
      <Suspense fallback={<span>Loading....</span>}>
        {searchApp.length === 0 ? (
          <h2 className="text-2xl font-semibold mt-10 text-gray-500">
            No App Found 
          </h2>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10 mt-5 max-w-7xl mx-auto">
            {searchApp.map((oneApp) => (
              <AllApp key={oneApp.id} oneApp={oneApp} />
            ))}
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default AllAppData;
