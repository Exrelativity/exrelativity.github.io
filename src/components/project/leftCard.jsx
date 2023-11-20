import "./styles.css";
import React from "react";

function LeftCard({ index, name, description, pic, tech, links }) {
  return (
    <div key={index} className="left-section">
      <div className="left-image order-1">
        <img src={pic} width="951" height="471" />
      </div>
      <div className="left-info order-2">
        <h2 className="p-1">{name}</h2>
        <p className="text-bold p-2">{description}</p>
        <div className="flex flex-row flex-wrap justify-start items-center">
          {tech.map((data, index) => (
            <div key={index} className="p-2 text-red-950 whitespace-nowrap rounded-md">
              {data}
            </div>
          ))}
        </div>
        {links.map((data, index) => (
          <a key={index} href={data.url} target="_blank" className="p-1 m-2 rounded-md">
            {data.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default LeftCard;
