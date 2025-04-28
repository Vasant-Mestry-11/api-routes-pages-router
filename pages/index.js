import { useRef } from "react";

export default function Home() {
  const emailRef = useRef();
  const feedbackRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <h1>The home page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="feedback">Feedback</label>
          <input type="text" id="feedback" />
        </div>
      </form>
    </>
  );
}
