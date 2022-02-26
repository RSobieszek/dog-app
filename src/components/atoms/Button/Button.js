import React from "react";
import { oneOfType, arrayOf, node, func, bool } from "prop-types";

// Import components
import { Loader } from "components";

function Button({ children, handleClick, isLoading = false }) {
  return (
    <button
      onClick={handleClick}
      className="border-[1px] border-gray-700 p-3 text-gray-700 transition ease-in-out duration-200  hover:border-pink-400 hover:text-pink-400 relative after:content-[''] after:absolute after:w-full after:h-full after:bg-yellow-300 after:top-[6px] after:left-[6px] after:-z-10 hover:after:top-0 hover:after:left-0 after:transition after:duration-300"
    >
      <div className="flex justify-center items-center">
        {isLoading ? <Loader /> : children}
      </div>
    </button>
  );
}

Button.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  handleClick: func,
  isLoading: bool,
};

export default Button;
