import React from "react";

export default function Footer() {
  return (
    <div className="row justify-content-center">
      <a
        href="https://github.com/bcbridges"
        target="_blank"
        rel="noreferrer"
        className="col-1 btn btn-outline-dark rounded mx-5"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/brice-bridges/"
        target="_blank"
        rel="noreferrer"
        className="col-1 btn btn-outline-dark rounded mx-5"
      >
        LinkedIn
      </a>
      <a
        href="mailto:bbridgesdev@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="col-1 btn btn-outline-dark rounded mx-5"
      >
        Email
      </a>
    </div>
  );
}
