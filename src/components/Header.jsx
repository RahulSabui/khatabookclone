import React from "react";

export const Header = ({ content }) => {
  return (
    <div className="container mx-auto px-10 my-10">
      <div className="text-5xl text-center font-bold text-black">{content}</div>
    </div>
  );
};
