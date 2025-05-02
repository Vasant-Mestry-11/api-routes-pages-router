import { useRef } from "react";

export default function Home() {
  const emailRef = useRef();
  const feedbackRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();


    const email = emailRef.current.value;
    const feedback = feedbackRef.current.value;

    // const body = {
    //   email,
    //   feedback,
    // };
    // console.lo

    fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        feedback
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <>
      <h1>The home page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="feedback">Feedback</label>
          <textarea id="feedback" ref={feedbackRef} />
        </div>
        <button type="submit">Share feedback</button>
      </form>
    </>
  );
}
