import React from "react";
import { string } from "prop-types";
import clsx from "clsx";

function Title({ text, smallDecoration = false }) {
  return (
    <div
      className={clsx(
        smallDecoration
          ? "before:h-8 before:w-8 before:-left-1 before:-top-1"
          : "before:h-14 before:w-14 before:-left-4 before:-top-4",
        "text-2xl font-bold before:block before:absolute before:bg-pink-400 relative inline-block"
      )}
    >
      <h1 className="relative text-black">{text}</h1>
    </div>
  );
}

Title.propTypes = {
  text: string,
};

export default Title;
