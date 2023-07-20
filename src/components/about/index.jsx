"use client";
import "./styles.css";
import React, { useState } from "react";

function About() {
  return (
    <>
    <div id="about" className="m-auto text-center w-full text-2xl mt-24 md:mt-24
    pt-24 md:pt-24 font-bold text-blue-700">
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
              style={{borderBottomRightRadius:"30%", borderTopLeftRadius: "30%"}}
              src="/me.jpeg"
              alt="Ukweh Chima Everest"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/everest-ukweh-354a1740/"
                );
              } } />
          </picture>
        </div>
        <div className="w-full">
          <h4 className="text-center text-bold">Ukweh Chima Everest</h4>
          <p className="text-center text-bold">CEO Walkre.com</p>
        </div>
      </div>
      <div id="techstack" className="md:w-1/2 w-full pt-5 pl-5 pr-5 justify-start text-start pb-10">
        <div className="pb-2">
          <h4 className="p-5 text-center text-bold">
            About Ukweh Chimaizu Everest
          </h4>
          <h1 className="text-3xl text-center text-bold font-weight-bolder">
            Software Developer
          </h1>
        </div>
        <p className="text-center md:text-justify text-bold text-lg md:leading-6 lg:leading-9 pb-2">
          A graduate of the Federal University of Technology where he studied
          Environmental Technology, He ventured into software programming as a
          result of owns passion and convictions. Currently, He is working at
          Amabills Technology, as a{" "}
          <strong style={{ color: "blue" }}>Backend Software Developer</strong>,{" "}
          Prior to that, He was at{" "}
          <a href="https://www.elacademy.org.ng/">El-Academy</a> as a{" "}
          <strong style={{ color: "blue" }}>
            Programing Tutor and Software Developer (Intern)
          </strong>{" "}
          where he taught many clients/students programming. Other experiences
          include working at{" "}
          <a href="https://www.rechargeandgetpaid.com">Recharge And Get Paid</a>{" "}
          as a <strong style={{ color: "blue" }}>Wallet Funding Officer</strong>{" "}
          and at <a href="https://walker.com.ng/">Walker.ng</a> as{" "}
          <strong style={{ color: "blue" }}>Software Engineer</strong>. Strong
          skills are in <strong style={{ color: "blue" }}>Python</strong>,{" "}
          <strong style={{ color: "blue" }}>Php</strong>,{" "}
          <strong style={{ color: "blue" }}>Laravel</strong>,{" "}
          <strong style={{ color: "blue" }}>React</strong>,{" "}
          <strong style={{ color: "blue" }}>Graphql</strong>,{" "}
          <strong style={{ color: "blue" }}>Excel</strong>,{" "}
          <strong style={{ color: "blue" }}>JavaScript</strong>,{" "}
          <strong style={{ color: "blue" }}>Node.js</strong>,{" "}
          <strong style={{ color: "blue" }}>MongoDB</strong>,{" "}
          <strong style={{ color: "blue" }}>Html</strong>,{" "}
          <strong style={{ color: "blue" }}>Express.js</strong>,{" "}
          <strong style={{ color: "blue" }}>Nest.js</strong>,{" "}
          <strong style={{ color: "blue" }}>MySQL</strong>,{" "}
          <strong style={{ color: "blue" }}>Css</strong>,{" "}
          <strong style={{ color: "blue" }}>Django</strong>, etc.
        </p>
      </div>
    </div></>
  );
}

export default About;
