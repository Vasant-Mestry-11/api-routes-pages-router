import { buildFeedbackPath, extractFeedbacks } from "../api/feedback";

export default function FeedbackPage({ feedbacks }) {
  return (
    <ul>
      {feedbacks.map(({ id, feedback }) => {
        return <li key={id}>{feedback}</li>;
      })}
    </ul>
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
