import { Download, Star } from "lucide-react";
import React from "react";

const InstallAppList = ({ app, handleUninstall }) => {
  const { image, title, ratingAvg, downloads, size } = app;

  return (
    <div className="border-2 mt-5 border-gray-300 p-3 flex justify-between items-center rounded-xl mx-5">
      <div className="flex items-center gap-2">
        <img src={image} alt="" className="h-[50px] w-[50px] rounded-xl" />
        <div>
          <h1 className="items-start flex">{title}</h1>
          <div className="flex items-center gap-2">
            <p className="text-[#00D390] rounded-xl flex items-center gap-1">
              <Download /> {downloads / 1000000}M
            </p>
            <p className="text-[#FF8811] rounded-xl flex items-center gap-1">
              <Star /> {ratingAvg}
            </p>
            <p className="text-[#627382] rounded-xl flex items-center gap-1">
              {size}MB
            </p>
          </div>
        </div>
      </div>
      <div>
        <button
          className="bg-[#00D390] text-white btn"
          onClick={() => handleUninstall(app)}
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstallAppList;
