import React from "react";

export default function Footer() {
  return (
    <div className="row justify-content-center">
      <a
        href="https://github.com/bcbridges"
        target="_blank"
        rel="noreferrer"
        className="col-2"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/brice-bridges/"
        target="_blank"
        rel="noreferrer"
        className="col-2"
      >
        LinkedIn
      </a>
      <a
        href="mailto:bbridgesdev@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="col-2"
      >
        Email
      </a>
    </div>
  );
}
