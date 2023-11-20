"use client";
import "./styles.css";
import React from "react";

import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaFile } from "@react-icons/all-files/fa/FaFile";
import { BsChevronDown } from "@react-icons/all-files/bs/BsChevronDown";
import links from "@/data/footerLinks";

function Landing() {
  return (
    <div id="landing" className="container m-auto h-full flex flex-col justify-center pt-56">
      <div className="w-full pb-10 gap-4">
        <h1
          className="text-center w-full text-6xl font-bold p-3"
          style={{ color: "rgba(0,0,0,1)" }}
        >
          Welcome, I&apos;m Ukweh Chima Everest,{" "}
        </h1>
        <h1
          className="text-center w-full text-5xl font-bold p-3"
          style={{ color: "rgba(0,0,0,1)" }}
        >
          <strong style={{ color: "rgba(8,42,138,1)" }}>
            A Full Stack Software Developer.
          </strong>
        </h1>
      </div>
      <div className="pt-5 container flex flex-row items-center justify-center">{links.map((data, index) => (
        <a key={index} className="text-xl p-2 hover:scale-150" href={data.url}>{data.icon === "github" ? <FaGithub /> : data.icon === "linkedin" ? <FaLinkedin /> : data.icon === "document" ? <FaFile /> : <FaFile />}</a>
      ))}</div>
      <div className="w-full text-center">
        <a href="#about" className="flex flex-col items-center justify-between gap-5">
          <div className="hover:scale-150 mt-10 transition-transform text-[rgba(8,42,138,1)] pb-10">Learn More</div>
          <div className="animate-bounce text-3xl h-96 mt-16 hover:scale-150"><BsChevronDown /></div>
        </a>
      </div>
    </div>
  );
}

export default Landing;