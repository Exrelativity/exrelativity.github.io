'use client'
import "./styles.css"
import React, { useEffect, useState } from "react";
import { GoRepoForked } from "@react-icons/all-files/go/GoRepoForked";
import { GoStar } from "@react-icons/all-files/go/GoStar";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaFile } from "@react-icons/all-files/fa/FaFile";
import links from "@/data/footerLinks.js";

const GITHUB_URL = "https://github.com/exrelativity/exrelativity.github.io";

export default function Footer() {
  const [forks, setForks] = useState(0);
  const [stars, setStars] = useState(0);

  useEffect(() => {
    fetch("https://api.github.com/repos/exrelativity/exrelativity.github.io")
      .then((response) => response.json()) // Converting the response to a JSON object
      .then((data) => {
        setForks(data.forks);
        setStars(data.stargazers_count);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div as="footer" className="mt-24 md:mt-24 pb-5
    pt-24 md:pt-24 m-auto text-center w-full flex flex-col gap-2">
      <a className="pb-5" href={GITHUB_URL} target="_blank">
        <p className="text-sm pb-4 hover:scale-150">Made with Next.js and React</p>
      </a>
      <div className="container pb-5 flex flex-row items-center justify-center gap-4">
        <div className="hover:scale-150 flex flex-row"><GoRepoForked /> <p className="text-xs">{forks}</p></div>
        <div className="hover:scale-150 flex flex-row"><GoStar /> <p className="text-xs">{stars}</p></div>
      </div>

      <a className="text-sm mt-2 pb-5 hover:scale-150" href="#landing">
        <span role="img" aria-label="rocket">
          &#128640;
        </span>{" "}
        Click me to scroll to the top!{" "}
        <span role="img" aria-label="rocket">
          &#128640;
        </span>
        <br />
      </a>
      <div className="container flex flex-row items-center justify-center gap-4">{links.map((data, index) => (
        <a key={index} className="text-base py-2 hover:scale-150" href={data.url}>{data.icon === "github" ? <FaGithub /> : data.icon === "linkedin" ? <FaLinkedin /> : data.icon === "document" ? <FaFile /> : <FaFile />}</a>
      ))}</div>
    </div>
  );
}
