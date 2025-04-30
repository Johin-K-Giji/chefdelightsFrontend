<<<<<<< HEAD
import React from "react";

const Button = ({ text, width = "auto", height = "auto", textSize = "1rem" , onClick }) => {
  return (
    <button
      className="bg-[#195B68] text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-[#154D5A] active:scale-95"
      style={{ width, height,fontSize: textSize }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
=======
import React from "react";

const Button = ({ text, width = "auto", height = "auto", textSize = "1rem" , onClick }) => {
  return (
    <button
      className="bg-[#195B68] text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-[#154D5A] active:scale-95"
      style={{ width, height,fontSize: textSize }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
>>>>>>> dd1c7660312511267f84c83e0cf8e0dde30732b8
