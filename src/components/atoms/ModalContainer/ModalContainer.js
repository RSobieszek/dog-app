import React from "react";
import { oneOfType, arrayOf, node, func } from "prop-types";

function ModalContainer({ children, toggle }) {
  // user can close modal by clicking on backdrop
  const stopPropagation = (event) => event.stopPropagation();

  return (
    <div
      onClick={toggle}
      className="grid place-items-center fixed top-0 left-0 w-screen h-screen bg-white/90 border-4"
    >
      <div
        onClick={stopPropagation}
        className="relative w-full p-5 max-w-3xl h-full md:h-auto flex flex-col space-y-5"
      >
        {children}
      </div>
    </div>
  );
}

ModalContainer.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  toggle: func,
};

export default ModalContainer;
