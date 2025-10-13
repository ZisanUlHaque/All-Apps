import React from "react";

const App = ({ singleApp }) => {

    const {title,image} = singleApp;

  return (
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
    </div>
  );
};

export default App;
