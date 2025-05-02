import { useState } from "react";
import { buildFeedbackPath, extractFeedbacks } from "../api/feedback";

export default function FeedbackPage({ feedbacks }) {
  const [feedbackItem, setFeedbackItem] = useState()

  const viewDetails = (id) => {
    fetch(`/api/feedback/${id}`)
      .then(response => response.json())
      .then(data => setFeedbackItem(data.feedback))
  }
  return (
    <>
      {feedbackItem && <p>{feedbackItem.email}</p>}
      <ul>
        {feedbacks?.map(({ id, feedback }) => {
          return (
            <>
              <li key={id}>{feedback}</li>
              <button onClick={() => viewDetails(id)}>View details</button>
            </>
          );
        })}
      </ul>

    </>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedbacks(filePath);

  return {
    props: {
      feedbacks: data,
    },
  };
}
