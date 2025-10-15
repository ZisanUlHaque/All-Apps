import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStroedApp } from "../../utility/AddToDB"; // if capital T
import InstallAppList from "../InstallAppList/InstallAppList";
import { ChevronDown } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InstallApp = () => {
  const [applist, setApplist] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData(); // all apps data

  // Load installed apps from localStorage
  const loadInstalledApps = () => {
    const storeAppData = getStroedApp(); // array of IDs (may be strings)
    const ConvertApp = storeAppData.map((id) => parseInt(id)); // ensure numbers
    const InstallList = data.filter((app) => ConvertApp.includes(app.id));
    setApplist(InstallList);
  };

  useEffect(() => {
    loadInstalledApps();
  }, [data]);

  // Sorting
  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "Size") {
      const sortedBySize = [...applist].sort((a, b) => a.size - b.size);
      setApplist(sortedBySize);
    }
    if (sortType === "Downloads") {
      const sortedByDownloads = [...applist].sort(
        (a, b) => a.downloads - b.downloads
      );
      setApplist(sortedByDownloads);
    }
  };

  // Handle uninstall
  const handleUninstall = (app) => {
    // Remove app ID from localStorage first
    const storeAppData = getStroedApp();
    const updatedStore = storeAppData.filter((id) => parseInt(id) !== app.id);
    localStorage.setItem("installList", JSON.stringify(updatedStore));

    // Reload installed apps from localStorage to update state
    loadInstalledApps();

    // Toast notification
    toast.success(`${app.title} uninstalled successfully!`);
  };

  return (
    <div>
      <div className="text-center mt-10 mx-auto mb-10">
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p>Explore all trending apps developed by us</p>
        <div className="flex justify-between items-center mx-5 mt-5 text-2xl font-bold">
          <h1>Apps Found: {applist.length}</h1>
          <details className="dropdown">
            <summary className="btn m-1 flex">
              Sort By <ChevronDown /> {sort ? sort : ""}
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm">
              <li>
                <a onClick={() => handleSort("Size")}>Size</a>
              </li>
              <li>
                <a onClick={() => handleSort("Downloads")}>Downloads</a>
              </li>
            </ul>
          </details>
        </div>

        {applist.length === 0 && (
          <p className="mt-10 text-lg font-medium">No apps installed.</p>
        )}

        {applist.map((app) => (
          <InstallAppList
            key={app.id}
            app={app}
            handleUninstall={handleUninstall}
          />
        ))}
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
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

export default InstallApp;
