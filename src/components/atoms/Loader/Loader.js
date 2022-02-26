import React from "react";
import { number } from "prop-types";

// Import assets
import PawLoader from "assets/paw-loader.png";

function Loader({ size = 6 }) {
  return (
    <img
      alt="loader-icon-dog-paw"
      src={PawLoader}
      className="animate-spin mx-5 h-5"
    />
  );
}

Loader.propTypes = {
  size: number,
};

export default Loader;
