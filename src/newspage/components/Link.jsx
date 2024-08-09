import React from "react";

const Link = ({ link }) => {
  return (
    <div className="mt-5">
      <a href={link} className="text-red-600 text-sm sm:text-base">
        Lihat Selengkapnya →
      </a>
    </div>
  );
};

export default Link;
