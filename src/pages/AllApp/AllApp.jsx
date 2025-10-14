import { Download , Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const AllApp = ({oneApp}) => {
    const {title,image,ratingAvg,downloads,id} = oneApp;
    return (
      <Link to={`/appDetails/${id}`}>

          <div className="card bg-base-100 w-70 shadow-xl mx-auto">
      <figure>
        <img
          src={image}
          alt=""
          className="w-[300px] h-[280px] object-cover p-5"
        />
      </figure>
      <div className="pt-2 pb-3">
        <h2 className="font-medium">{title}</h2>
      </div>
            <div className="flex justify-between items-center pt-2 pb-3 mx-3">
        <p className="bg-[#F1F5E8] text-[#00D390] p-2 rounded-xl flex items-center gap-1"><Download> </Download> { (downloads / 1000000) }M</p>
        <p className="bg-[#F1F5E8] text-[#FF8811] p-2 rounded-xl flex items-center gap-1"><Star></Star> {ratingAvg}</p>
      </div>
    </div>
      </Link>
    );
};

export default AllApp;