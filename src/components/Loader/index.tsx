import React from "react";
import loaderImg from "assets/loader.svg";

const Loader = () => {
  return (
    <div className="loader">
      <img src={loaderImg} alt="Loader" className="loader-img" />
    </div>
  );
};

export default Loader;
