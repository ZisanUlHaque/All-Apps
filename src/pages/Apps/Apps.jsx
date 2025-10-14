import React, { Suspense } from "react";
import App from "../App/App";
import { Link } from "react-router";

const Apps = ({ data }) => {
  return (
    <div>
      <div className="text-center mt-10 mx-auto mb-10">
        <h1 className="text-4xl font-bold">Trending Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>

        <Suspense fallback={<span>loading.....</span>}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10 mt-5 max-w-7xl mx-auto">
            {data.map((singleApp) => (
              <App key={singleApp.id} singleApp={singleApp}></App>
            ))}
          </div>
        </Suspense>
        <Link to='/apps'>
          <a
            className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-3 rounded-xl"
          >
            Show All
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Apps;
