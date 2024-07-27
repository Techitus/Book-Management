/* eslint-disable react/prop-types */
import { useState } from "react";

const Rating = ({ setRating }) => {
  const [hoverCount, setHoverCount] = useState(0);
  const handleMouseOver = (index) => {
    setHoverCount(index + 1);
  };

  

  return (
    <div className="flex items-center text-4xl cursor-pointer">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onMouseOver={() => handleMouseOver(index)}
          onClick={() => setRating(index + 1)}
          className={`${
            index + 1 <= (hoverCount || setRating)
              ? "text-yellow-400"
              : "text-gray-400"
          }`}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default Rating;
