import { buildFeedbackPath, extractFeedbacks } from "./feedback"


export default function handler(req, res) {
  const { feedbackId } = req.query;
  const filePath = buildFeedbackPath()
  const data = extractFeedbacks(filePath)
  const selectedFeedback = data.find((item) => item.id === feedbackId);

  res.status(200).json({
    feedback: selectedFeedback
  })
}