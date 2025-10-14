import { Download, Star, ThumbsUp } from "lucide-react";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const singleHook = data.find((app) => app.id === appId);

  const { title, image, companyName, downloads, ratingAvg, reviews ,size} =
    singleHook;

  console.log(singleHook);

  return (
    <div>
      <div className="flex items-center">
        <div>
          <img src={image} alt="" className="w-[300px] h-[300px]" />
        </div>
        <div>
          <div>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="mt-2">Developed by: {companyName}</p>
          </div>
          <div className="flex items-center gap-10 mt-5 border-t-2 pt-5">
            <div className="grid gap-y-1.5">
              <p className="text-[#00D390]">
                <Download></Download>
              </p>
              <p>Downloads</p>
              <h1 className="font-bold text-4xl">{downloads / 1000000}M</h1>
            </div>
            <div className="grid gap-y-1.5">
              <p className="text-[#FF8811]">
                <Star></Star>
              </p>
              <p>Average Ratings</p>
              <h1 className="font-bold text-4xl">{ratingAvg}</h1>
            </div>
            <div className="grid gap-y-1.5">
              <p className="text-[#632EE3]">
                {" "}
                <ThumbsUp></ThumbsUp>{" "}
              </p>
              <p>Total Reviews</p>
              <h1 className="font-bold text-4xl">{reviews / 1000}K</h1>
            </div>
          </div>
          <div className="mt-5">
            <button className="bg-[#00D390] btn text-white">Install Now ({size} MB)</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
