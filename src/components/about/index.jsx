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
            A graduate of the Federal University of Technology where he studied
            Environmental Technology, He ventured into software programming as a
            result of owns passion and convictions. He is Currently a Freelancer and Blogger, Prior to that, He was at{" "}
            Amabills Technology, as a{" "}
            <strong style={{ color: "rgba(8,42,138,1)" }}>Software Developer</strong> and at{" "}
            <a href="https://www.elacademy.org.ng/">El-Academy</a>{" "}as a{" "}
            <strong style={{ color: "rgba(8,42,138,1)" }}>
              Programing Tutor and Software Developer (Intern)
            </strong>{" "}
            where he taught many clients/students programming. Other experiences
            includes working at{" "}
            <a href="https://www.rechargeandgetpaid.com">Recharge And Get Paid</a>{" "}
            as a <strong style={{ color: "rgba(8,42,138,1)" }}>Wallet Funding Officer</strong>{" "}
            and at <a href="https://walker.com.ng/">Walkre.com and Swifre.com</a> as a{" "}
            <strong style={{ color: "rgba(8,42,138,1)" }}>Software Engineer</strong>. Strong
            skills are in <strong style={{ color: "rgba(8,42,138,1)" }}>Python</strong>,{" "}
            <strong style={{ color: "rgba(8,42,138,1)" }}>Php</strong>,{" "}
            <strong style={{ color: "rgba(8,42,138,1)" }}>Laravel</strong>,{" "}
            <strong style={{ color: "rgba(8,42,138,1)" }}>React</strong>,{" "}
            <strong style={{ color: "rgba(8,42,138,1)" }}>React Native</strong>,{" "}
            <strong style={{ color: "rgba(8,42,138,1)" }}>Graphql</strong>,{" "}
            <strong style={{ color: "rgba(8,42,138,1)" }}>Excel</strong>,{" "}
            <strong style={{ color: "rgba(8,42,138,1)" }}>JavaScript</strong>,{" "}
            <strong style={{ color: "rgba(8,42,138,1)" }}>Node.js</strong>,{" "}
            <strong style={{ color: "rgba(8,42,138,1)" }}>MongoDB</strong>,{" "}
            <strong style={{ color: "rgba(8,42,138,1)" }}>Html</strong>,{" "}
            <strong style={{ color: "rgba(8,42,138,1)" }}>Express.js</strong>,{" "}
            <strong style={{ color: "rgba(8,42,138,1)" }}>Nest.js</strong>,{" "}
            <strong style={{ color: "rgba(8,42,138,1)" }}>MySQL</strong>,{" "}
            <strong style={{ color: "rgba(8,42,138,1)" }}>Css</strong>,{" "}
            <strong style={{ color: "rgba(8,42,138,1)" }}>Rust</strong>,{" "}
            <strong style={{ color: "rgba(8,42,138,1)" }}>Java</strong>,{" "}
            <strong style={{ color: "rgba(8,42,138,1)" }}>Django</strong>, etc.
          </p>
        </div>
      </div></>
  );
}

export default About;
