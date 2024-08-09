import React from "react";

const CardHeader = ({ id, image }) => {
  return (
    <header className="flex flex-col">
      <h2 className="font-bold text-lg">{id}</h2>
      <img src={image} alt="Berita" className="w-full h-32 sm:h-48 object-cover" />
    </header>
  );
};

export default CardHeader;
