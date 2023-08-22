"use client";
import "./styles.css";
import React, { useState, useEffect } from "react";
import { GrMenu } from "@react-icons/all-files/gr/GrMenu";
import { GrClose } from "@react-icons/all-files/gr/GrClose";

function Navbar() {
  const [currentClick, setCurrentClick] = useState(false);
  const handleOnclick = () => {
    setCurrentClick((currentClick) => (currentClick ? false : true));
  };

  const [visitor, setVisitor] = useState("");
  const [visitordns, setVisitordns] = useState("");
  useEffect(() => {
    function getinfo() {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://ip-api.com/json", true);
      xhr.send();
      xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          var response = this.responseText;
          setVisitor((visitor) => response);
    
        }
      };
    }
    function getdnsinfo() {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://edns.ip-api.com/json", true);
      xhr.send();
      xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          var response = this.responseText;
          setVisitordns((visitordns) => response);
    
        }
      };
    }
    getinfo();
    getdnsinfo();
  }, []);

  useEffect(() => {
    if (visitor !== undefined && visitor !== "") {
      async function sendinfo() {
        const body = new FormData();
        body.set("Visitor", JSON.stringify(visitor));
        body.set("Visitordns", JSON.stringify(visitordns));
        body.set("Date", Date().toString());
        const resp = await fetch(
          "https://api.sheetmonkey.io/form/ppp8akfogi1gfsBs2QqE91",
          {
            method: "POST",
            body,
          }
        );
      }
      sendinfo();
    }
  }, [visitordns, visitor]);

  return (
    <div id="top" className="navigation" style={{ zIndex: 1 }}>
      <div className="logo">
        <a className="no-underline" href="#landing">
          Exrelativity
        </a>
      </div>

      <div className="block md:inline-flex">
        <div
          className="flex md:hidden text-2xl ease-in-out"
          onClick={handleOnclick}
        >
          {currentClick ? <GrClose /> : <GrMenu />}
        </div>
        <div
          className={
            currentClick
              ? "pb-1 ease-in-out md:pb-0 md:inline-flex absolute md:relative top-20 md:top-0 bg-white md:bg-inherit w-80 md:w-auto pr-10 pl-5 md:pr-5 md:pl-5 right-0 md:right-auto rounded-b-md md:rounded-b-none"
              : "hidden ease-in-out md:inline-flex"
          }
        >
          <div className="hover:text-lg p-1 pb-1 md:pr-4 md:pb-0">
            <a href="#about"> About </a>
          </div>
          <div className="hover:text-lg p-1 pb-1 md:pr-4 md:pb-0">
            <a href="#techstack">Tech. Stack</a>
          </div>
          <div className="hover:text-lg p-1 pb-1 md:pr-4 md:pb-0">
            <a href="#experience"> Experience </a>
          </div>
          <div className="hover:text-lg p-1 pb-1 md:pr-4 md:pb-0">
            <a href="#project"> Project</a>
          </div>
          <div className="hover:text-lg p-1 pb-1 md:pr-4 md:pb-0">
            <a href="#contact">Contact</a>
          </div>
          <div className="hover:text-lg p-1 pb-1 md:pr-4 md:pb-0">
            <a href="https://github.com/exrelativity" target="_blank">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
