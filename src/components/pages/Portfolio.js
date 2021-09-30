import React from "react";
import "./portfolio.css";

export default function Portfolio() {
  return (
    <>
      <h1 className="container row justify-content-around">My Work</h1>
      <section className="container row justify-content-around projects">
        <div className="card col-5 row justify-content-evenly" id="proj1">
          <h3 className="text-light text-center">Delishery</h3>
          <a
            className="btn btn-sm btn-light w-50"
            href="https://adrianauch.github.io/Delishery/"
            target="_blank"
            rel="noreferrer"
          >
            Take Me
          </a>
        </div>
        <div className="card col-5 row justify-content-evenly" id="proj2">
          <h3 className="text-light text-center">Tech Blog</h3>
          <a
            className="btn btn-sm btn-light w-50"
            href="https://fathomless-ridge-27666.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            Take Me
          </a>
        </div>
        <div className="card col-5 row justify-content-evenly" id="proj3">
          <h3 className="text-light text-center">Gathr</h3>
          <a
            className="btn btn-sm btn-light w-50"
            href="https://shielded-mesa-10854.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            Take Me
          </a>
        </div>
        <div className="card col-5 row justify-content-evenly" id="proj4">
          <h3 className="text-light text-center">Note Taker</h3>
          <a
            className="btn btn-sm btn-light w-50"
            href="https://floating-escarpment-06221.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            Take Me
          </a>
        </div>
        <div className="card col-5 row justify-content-evenly" id="proj5">
          <h3 className="text-dark text-center">E-Commerce Backend</h3>
          <a
            className="btn btn-sm btn-light w-50"
            href="https://github.com/bcbridges/E-Commerce"
            target="_blank"
            rel="noreferrer"
          >
            Take Me
          </a>
        </div>
        <div className="card col-5 row justify-content-evenly" id="proj6">
          <h3 className="text-dark text-center">Portfolio</h3>
          <a
            className="btn btn-sm btn-light w-50"
            href="https://bcbridges.github.io/Brice-Bridges-Portfolio/"
            target="_blank"
            rel="noreferrer"
          >
            Take Me
          </a>
        </div>
      </section>
    </>
  );
}
