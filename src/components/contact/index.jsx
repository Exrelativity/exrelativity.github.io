"use client";
import "./styles.css";
import React from "react";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";

export default function Contact() {
  return (
    <>
      <div
        id="contact"
        name="contact"
        className="m-auto text-center w-full text-2xl mt-24 md:mt-24 pt-24 md:pt-24 pb-5  text-[rgba(8,42,138,1)] font-bold "
      >
        <h1>Contact</h1>
      </div>
      <div>
        <div className="flex flex-col justify-center text-center pl-4 pr-4 items-center w-full text-base">
          <p className="text-xl m-auto mt-6">
            Either it&apos;s a job opportunity, an invite to coffee,
          </p>
          <p className="text-xl m-auto">
            or feedback on my portfolio, my inbox is open. Thanks!
          </p>
          <a
            href="mailto:ukweheverest@gmail.com"
            target="_blank"
            className="m-auto mt-6 flex flex-row items-center justify-center text-xl bg-[rgba(8,42,138,1)] text-white p-3 px-5 rounded-md gap-3"
          >
            <MdEmail className="text-2xl" />
            Send Email
          </a>
        </div>
      </div>
    </>
  );
}
