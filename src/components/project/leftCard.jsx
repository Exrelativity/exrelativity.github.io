import "./styles.css";
import React from "react";

function LeftCard({ key, name, description, pic, tech, links }) {
  return (
    <div key={key} className="left-section">
      <div className="left-image order-1">
        <img src={pic} width="951" height="471" />
      </div>
      <div className="left-info order-2">
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
    </div>
  );
}

export default LeftCard;
