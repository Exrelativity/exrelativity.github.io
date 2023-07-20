import "./styles.css";
import React from "react";

function RightCard({ key, name, description, pic, tech, links }) {
  return (
    <div key={key} className="right-section">
      <div className="right-info order-1">
        <h2>{name}</h2>
        <p className="text-start text-bold pb-2">{description}</p>
        <div className="flex flex-row justify-center items-center">
          {tech.map((data, index) => (
            <div key={index} className="p-2">
              {data}
            </div>
          ))}
        </div>
        {links.map((data, index) => (
          <a key={index} href={data.url} target="_blank" className="p-1">
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
