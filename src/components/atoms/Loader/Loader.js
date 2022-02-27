import React from "react";
import { number } from "prop-types";
import clsx from "clsx";

// Import assets
import PawLoader from "assets/paw-loader.png";

// Import helpers
import { LOADER_MODIFIERS, BUTTON_SIZE } from "./helpers";

function Loader({ modifier = BUTTON_SIZE }) {
  return (
    <img
      alt="loader-icon-dog-paw"
      src={PawLoader}
      className={clsx("animate-spin", LOADER_MODIFIERS[modifier])}
    />
  );
}

Loader.propTypes = {
  size: number,
};

export default Loader;
