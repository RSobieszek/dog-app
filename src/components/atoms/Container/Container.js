import React from "react";
import { oneOfType, arrayOf, node, string } from "prop-types";
import clsx from "clsx";

// Import helpers
import { CONTAINER_MODIFIERS } from "./helpers";

function Container({ children, modifier }) {
  return <div className={clsx(CONTAINER_MODIFIERS[modifier])}>{children}</div>;
}

Container.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  modifier: string,
};

export default Container;
