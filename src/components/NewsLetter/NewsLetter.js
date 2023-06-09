import React, { useState } from "react";
import styles from "./NewsLetter.module.css";

const NewsLetter = () => {
  const [state, setState] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [formSuccess, setFormSuccess] = useState(null);
  // 0 - initial , 1 - loading , 2 - success, 3 - error

  const subscribe = async (e) => {
    e.preventDefault();

    setState(1);
    setErrorMsg("");
    console.log(e.target[0].value);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: e.target[0].value,
      });

      const data = await res.json();
      if (data.error !== null) {
        throw data.error;
      }
      setFormSuccess(true);

      console.log(state);
    } catch (e) {
      setErrorMsg(e);
      setFormSuccess(false);
    }
  };

  return (
    <>
      <form onSubmit={subscribe} className="">
        <input required placeholder="Enter Your Email" type="email" />
        <button type="submit">Subscribe</button>
      </form>

      {!formSuccess ? (
        <p>Email subscription failed</p>
      ) : (
        <p>Email subscription successful</p>
      )}
    </>
  );
};

export default NewsLetter;
