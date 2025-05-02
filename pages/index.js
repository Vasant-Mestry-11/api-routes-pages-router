import { useRef, useState } from "react";

export default function Home() {
  const [feedbackItems, setFeedbackItems] = useState([]);

  const emailRef = useRef();
  const feedbackRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const email = emailRef.current.value;
    const feedback = feedbackRef.current.value;

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
      .then((data) => setFeedbackItems(data.feedbacks));
  }

  function getAllFeedbacks() {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => setFeedbackItems(data.feedbacks));
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
      <hr />
      <button onClick={getAllFeedbacks}>Get Feedbacks</button>
      <ul>
        {feedbackItems.map(({ id, feedback }) => <li key={id}>{feedback}</li>)}
      </ul>
    </>
  );
}
