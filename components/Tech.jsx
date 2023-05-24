import React from "react";

const Tech = ({ tech }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      marginRight: "5px",
      marginLeft: "5px",
      justifySelf: "center",
      alignSelf: "center",
      width: "auto",
    }}
  >
    {tech.map((item, index) => (
      <div
        key={`${item}-${index}`}
        style={{
          marginRight: "5px",
          marginLeft: "5px",
          justifySelf: "flex-end",
          alignSelf: "center",
          width: "auto",
        }}
      >
        {item}
      </div>
    ))}
  </div>
);

export default Tech;
