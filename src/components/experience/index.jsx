"use client";
import jobs from "@/data/jobs";
import "./styles.css";
import React, { useEffect, useState } from "react";
import { BsDot } from "@react-icons/all-files/bs/BsDot";

function Experience() {
  const [activeExperience, setActiveExperience] = useState([jobs[0]]);
  // useEffect(() => {
  //   setActiveExperience(activeExperience => [jobs[0]]);
  // }, []);
  return (
    <div id="experience">
      <div className="m-auto text-center w-full text-2xl pt-16 md:pt-16  text-blue-700">
        <h1>Experience</h1>
      </div>
      <div className="w-full p-10 flex flex-col md:flex-row m-auto justify-center items-start">
        <div className="w-full md:w-96 flex justify-center items-start ">
          <ul className="w-full">
            {jobs.map((data, index) => (
              <li
                key={index}
                onClick={() => setActiveExperience([data])}
                className="w-full md:w-96 bg-gray-300 p-4 whitespace-nowrap text-ellipsis rounded-md m-1 hover:bg-gray-200 hover:border border-gray-300"
              >
                {data.workplace}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-1 flex items-start justify-start">
          {activeExperience.map((data, index) => (
            <div className="p-1 flex flex-col whitespace-normal w-full h-full" key={index}>
              <div className="p-1 text-xl font-bold">
                {data.position} @ <a className="text-blue-700" href={data.url}>{data.workplace}</a>
              </div>
              <div className="p-1 font-light">{data.duration}</div>
              <div className="p-1 ">
                {data.description.map((para, index) => (
                  <div className="p-1 flex flex-row items-start justify-start" key={index}><p><BsDot className="text-2xl"/></p> <p className="text-start">{para}</p></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
