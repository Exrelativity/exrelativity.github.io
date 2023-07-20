'use client'
import "./styles.css"
import React, { useEffect, useState } from "react";
import { GoRepoForked} from "@react-icons/all-files/go/GoRepoForked";
import { GoStar} from "@react-icons/all-files/go/GoStar";
import { FaGithub} from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin";
import { FaFile } from "@react-icons/all-files/fa/FaFile";
import links from "@/data/footerLinks";

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
    <div as="footer" className="mt-24 md:mt-24 pb-0
    pt-24 md:pt-24 m-auto text-center w-full">
      <a className="pb-5" href={GITHUB_URL} isExternal>
        <p className="text-sm pb-4">Made with Next.js and React</p>
      </a>
      <div className="container pb-5 flex flex-row items-center justify-center">
        <GoRepoForked /> <p className="text-xs">{forks}</p>
        <GoStar /> <p className="text-xs">{stars}</p>
      </div>

      <a className="text-sm mt-2 pb-5"  href="#landing">
        <span role="img" aria-label="rocket">
          &#128640;
        </span>{" "}
        Click me to scroll to the top!{" "}
        <span role="img" aria-label="rocket">
          &#128640;
        </span>
        <br/>
      </a>
      <div className=" container flex flex-row items-center justify-center">{links.map((data)=>(
        <a className="text-base py-2" href={data.url}>{data.icon === "github" ? <FaGithub /> : data.icon === "linkedin" ? <FaLinkedin />  : data.icon === "document" ? <FaFile /> : <FaFile />}</a>
      ))}</div>
    </div>
  );
}
