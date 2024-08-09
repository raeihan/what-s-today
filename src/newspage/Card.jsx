import React from "react";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";

const Card = ({ id, image, date, title, content, link }) => {
  return (
    <a href={link}>
      <article className="p-6 rounded-md bg-white shadow-lg hover:scale-105 transition-transform duration-300">
        <CardHeader id={id} image={image}/>
        <CardBody date={date} title={title} content={content} link={link}/>
      </article>
    </a>
  );
};

export default Card;
