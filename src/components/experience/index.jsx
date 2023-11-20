"use client";
import jobs from "@/data/jobs";
import "./styles.css";
import React, { useEffect, useState } from "react";
import { BsDot } from "@react-icons/all-files/bs/BsDot";

function Experience() {
  const [activeExperience, setActiveExperience] = useState([jobs[0]]);
  return (
    <div id="experience">
      <div className="m-auto text-center container text-2xl pt-16 md:pt-24  text-[rgba(8,42,138,1)]">
        <h1>Experience</h1>
      </div>
      <div className="container p-1 max-md:p-0 flex flex-col lg:flex-row m-auto justify-center items-start gap-9" >
        <div className="container lg:w-96 flex justify-start md:justify-center items-start ">
          <ul className="container">
            {jobs.map((data, index) => (
              <li
                key={index}
                onClick={() => setActiveExperience([data])}
                className="container lg:w-96 bg-gray-300 p-4 whitespace-nowrap text-ellipsis rounded-md m-1 hover:bg-gray-200 hover:border border-gray-300"
              >
                {data.workplace}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-1 flex items-start justify-start">
          {activeExperience.map((data, index) => (
            <div className="p-1 flex flex-col whitespace-normal container h-full" key={index}>
              <div className="p-1 text-xl font-bold">
                {data.position} @ <a className="text-[rgba(8,42,138,1)]" href={data.url}>{data.workplace}</a>
              </div>
              <div className="p-1 font-light">{data.duration}</div>
              <div className="p-1 ">
                {data.description.map((para, index) => (
                  <div className="p-1 flex flex-row items-start justify-start" key={index}><p><BsDot className="text-2xl" /></p> <p className="text-start">{para}</p></div>
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
