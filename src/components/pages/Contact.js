import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      window.alert("Please enter a valid email address.");
    } else {
      setEmail("");
      setMessage("");
      setName("");
      window.alert("Thanks for the message! I'll reach back out shortly.");
    }
  };

  return (
    <>
      <h1>Contact Me</h1>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            name="name"
            value={name}
            className="form-control"
            id="exampleInputEmail1"
            onChange={handleInputChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
            name="email"
            value={email}
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleInputChange}
          />
        </div>
        <div class="form-group mb-3">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea
            name="message"
            value={message}
            class="form-control"
            id="exampleFormControlTextarea1"
            onChange={handleInputChange}
            rows="3"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
}
