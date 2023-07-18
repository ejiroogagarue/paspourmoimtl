import { useRef, useState } from "react";
import React from "react";
import styles from "./Subscribe.module.css";

const Subscribe = () => {
  // 1. Create a reference to the input
  const inputEl = useRef(null);

  // 2. Hold a message in state
  const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
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
      // 4. If there was an error, update the message in state.
      setMessage("Email already Exists");
      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = "";
    setMessage("Success! 🎉 You are now subscribed to the newsletter.");
  };
  return (
    <div className={styles.container}>
      
      <form onSubmit={subscribe} className={styles.formContainer}>
      
        <div className={styles.formInput}>
          <input
            id="email-input"
            name="email"
            placeholder="Enter your email...."
            ref={inputEl}
            required
            type="email"
            className={styles.subscribeFormInput}
          />
          <button type="submit" className={styles.submitButton}>{"Subscribe "}</button>
        </div>

        <div className={styles.message}>{message ? message : ` `}</div>
      </form>
    </div>
  );
};

export default Subscribe;
