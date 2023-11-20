import "./styles.css";
import React from "react";

function RightCard({ index, name, description, pic, tech, links }) {
  return (
    <div key={index} className="right-section">
      <div className="right-info order-1">
        <h2 className="p-1">{name}</h2>
        <p className="text-bold p-2">{description}</p>
        <div className="flex flex-row flex-wrap justify-start items-center">
          {tech.map((data, index) => (
            <div key={index} className="p-2 text-white whitespace-nowrap  rounded-md">
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
      <div className="right-image order-2">
        <img src={pic} width="951" height="471" />
      </div>
    </div>
  );
}

export default RightCard;
