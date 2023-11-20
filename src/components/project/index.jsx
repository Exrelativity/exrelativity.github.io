"use client";
import "./styles.css";
import React, { useEffect, useState } from "react";
import projectsdata from "@/data/projects";
import RightCard from "./rightCard";
import LeftCard from "./leftCard";

function Project() {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    setProjects([...projectsdata]);
  }, []);
  // let i = 0;
  const evaluateindex = (i) => i % 2 === 0;
  return (
    <>
      <div
        id="project"
        className="m-auto text-center w-full text-2xl mt-24 md:mt-24
    pt-24 md:pt-24 pb-5  text-[rgba(8,42,138,1)] font-bold"
      >
        <h1>Projects</h1>
      </div>
      <div className="container " style={{ zIndex: "0" }}>
        <div className="project w-full">
          {projects &&
            projects.map((data, index) => (
              <div key={index}>
                {evaluateindex(index) ? (
                  <div className="w-full overflow-auto">
                    <RightCard index={index} {...data} />
                  </div>
                ) : (
                  <div className="w-full overflow-auto">
                    <LeftCard index={index} {...data} />
                  </div>
                )}
                {/* <span className="hidden">{index}</span> */}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Project;
