import React, { useRef, useState } from "react";
import styles from "./Subscribe.module.css";
const Subscribe = () => {
  // Create a referenc to the input so we can fetch / clear its value.
  const inputEl = useRef(null);

  // Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    // Send a request to our API with the user's email address.
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      // if there was an error, update the message in state.
      setMessage(error);
      return;
    }

    // Clear the input value and show a success message.
    inputEl.current.value = "";
    setMessage("Success! 🎉 You are now subscribed to the newsletter.");
  };

  return (
    <>

      <h3 className={styles.title}>Coming soon. Join Our Mailing List to stay updated.</h3>
      <form onSubmit={subscribe} className={styles.formContainer}>
        <label htmlFor="email-input">{"Email Address"}</label>
        <input
          id="email-input"
          name="email"
          placeholder="Enter Email Address...."
          ref={inputEl}
          required
          type="email"
          className={styles.textBox}
        />

        <button type="submit" className={styles.submitButton}>
          {"Subscribe"}
        </button>
      </form>

      <div>
        {message
          ? message
          : `I'll only send emails when new content is posted, No spam.`}
      </div>
    </>
  );
};

export default Subscribe;
