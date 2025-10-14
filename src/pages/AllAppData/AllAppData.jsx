import React, { Suspense } from "react";
import AllApp from "../AllApp/AllApp";

const AllAppData = ({ data }) => {
  return (
    <div className="text-center mt-10 mx-auto mb-10">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p>Explore All Apps on the Market developed by us. We code for Millions</p>
      <Suspense fallback={<span>Loading....</span>}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10 mt-5 max-w-7xl mx-auto">
          {data.map((oneApp) => (
            <AllApp key={oneApp.id} oneApp={oneApp}></AllApp>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default AllAppData;
