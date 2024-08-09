import React from "react";
import Link from "./Link";

const CardBody = ({ date, title, content, link }) => {
  return (
    <div className="mt-4 mb-2">
      <div className="border-b-2 border-red-400 pb-2">
        <h2 className="font-bold text-sm sm:text-base">{title}</h2>
      </div>
      <p className="text-xs sm:text-sm my-2">{content}</p>
      <p className="text-xs sm:text-sm text-gray-600">{date}</p>
      <Link link={link} />
    </div>
  );
};

export default CardBody;
