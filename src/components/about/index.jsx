"use client";
import "./styles.css";
import React, { useState } from "react";

function About() {
  return (
    <>
      <div id="about" className="m-auto text-center w-full text-2xl
    pt-24 md:pt-24 font-bold text-[rgba(8,42,138,1)]">
        <h1>About</h1>
      </div>
      <div

        className="bg-inherit w-full flex md:flex-row flex-col"
      >
        <div className="imgcover flex justify-center flex-col pt-5 md:w-1/2 w-full md:pr-7">
          <div className="w-full">
            <picture>
              <img
                className="rounded-tl-3xl rounded-br-3xl m-auto border-t-2 border-l-4 border-b-0 border-r-8 border-white"
                style={{ borderBottomRightRadius: "30%", borderTopLeftRadius: "30%" }}
                src="/me.jpeg"
                alt="Ukweh Chima Everest"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/everest-ukweh-354a1740/"
                  );
                }} />
            </picture>
          </div>
          <div className="w-full">
            <h4 className="text-center text-bold">Ukweh Chima Everest</h4>
            <p className="text-center text-bold">Software Developer</p>
          </div>
        </div>
        <div id="techstack" className="md:w-1/2 w-full pt-5 pl-5 pr-5 justify-start text-start pb-10">
          <div className="p-2 gap-8">
            <h4 className="font-bold text-center text-bold">
              About Ukweh Chimaizu Everest
            </h4>
            <h1 className="text-3xl text-center font-bold font-weight-bolder">
              Software Developer
            </h1>
          </div>
          <p className="text-center md:text-justify text-bold text-base md:leading-7 lg:leading-7 pb-2">
           <strong>Software Developer</strong> with a degree in <em>Environmental Technology</em> and <strong>extensive experience</strong> across <strong>full-stack development</strong>, <strong>data analysis</strong>, and <strong>machine learning</strong>.  
  Proficient in languages like <strong>Python</strong>, <strong>JavaScript</strong>, <strong>PHP</strong>, <strong>Java</strong>, and <strong>Rust</strong>, along with frameworks including <strong>React</strong>, <strong>React Native</strong>, <strong>Next.js</strong>, <strong>Laravel</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>Nest.js</strong>, <strong>Django</strong>, <strong>GraphQL</strong>, <strong>PyTorch</strong>, <strong>TensorFlow</strong>, <strong>Scikit-learn</strong>, and <strong>Spring Boot</strong>.  
  <strong>Proven track record</strong> in delivering <strong>robust, scalable applications</strong> through previous roles at <strong>Management System Space</strong>, <strong>Urban.ng</strong>, <strong>Amabills Technology</strong>, <strong>El-Academy</strong>, <strong>Walkre.com</strong>, and <strong>Swifre.com</strong>.  
  Skilled in building both <strong>frontend</strong> and <strong>backend</strong> solutions with a strong focus on <strong>quality</strong> and <strong>efficiency</strong>.
          </p>
        </div>
      </div></>
  );
}

export default About;
