import React from "react";
import { oneOfType, arrayOf, node, string } from "prop-types";

// Import components
import { Title } from "components";

function Card({ title, children }) {
  return (
    <div className="m-4 p-5 border-[0.5px] border-gray-200 flex flex-col gap-4">
      <Title text={title} smallDecoration />
      {children}
    </div>
  );
}

Card.propTypes = {
  title: string.isRequired,
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Card;
