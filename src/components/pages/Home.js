import React from "react";
import "./home.css";

export default function Home() {
  return (
    <>
      <section className="container row justify-content-around mb-5">
        <h1 className="col-12 text-center my-2" id="introSection">
          Welcome! My name is Brice Bridges
        </h1>
        <img
          src={process.env.PUBLIC_URL + "/images/ProfilePhoto.png"}
          alt="Profile"
          className="col-4 rounded-circle"
        />
        <p className="col-6" id="aboutSection">
          I'm a UI developer who puts an emphasis on less code to do more.
        </p>
      </section>
    </>
  );
}
