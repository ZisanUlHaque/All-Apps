import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStroedApp } from "../../utility/addtoDB.JS";
import InstallAppList from "../InstallAppList/InstallAppList";
import { ChevronDown } from "lucide-react";

const InstallApp = () => {
  const [applist, setApplist] = useState([]);
  const [sort,setSort] = useState("");
  const data = useLoaderData();
  
  useEffect(() => {
    const storeAppData = getStroedApp();
    const ConvertApp = storeAppData.map((id) => parseInt(id));
    const InstallList = data.filter((app) => ConvertApp.includes(app.id));
    setApplist(InstallList);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType)
    if(sortType === "Size"){
      const sortedBySize = [...applist].sort((a,b)=>a.size-b.size);
      setApplist(sortedBySize);
    }
    if(sortType === "Downloads"){
      const sortedBySize = [...applist].sort((a,b)=>a.downloads-b.downloads);
      setApplist(sortedBySize);
    }
  }

  return (
    <div>
      <div className="text-center mt-10 mx-auto mb-10">
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us </p>
        <div className="flex justify-between items-center mx-5 mt-5 text-2xl font-bold">
          <h1>App Found</h1>
          <details className="dropdown">
            <summary className="btn m-1 flex">Sort By <ChevronDown></ChevronDown> { sort ? sort: ""} </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm">
              <li>
                <a onClick={() => handleSort("Size")}>Size</a>
              </li>
              <li>
                <a onClick={()=> handleSort("Downloads")}>Downloads</a>
              </li>
            </ul>
          </details>
        </div>

        {applist.map((app) => (
          <InstallAppList key={app.id} app={app}></InstallAppList>
        ))}
      </div>
    </div>
  );
};

export default InstallApp;
