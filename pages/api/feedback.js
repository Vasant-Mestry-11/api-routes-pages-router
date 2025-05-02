import path from 'path';
import fs from 'fs'

export function buildFeedbackPath() {
  return path.join(process.cwd(), 'data', 'feedback.json');
}

export function extractFeedbacks(filePath) {
  const fileData = fs.readFileSync(filePath)
  const data = JSON.parse(fileData);
  return data
}

export default function feedbackHandler(req, res) {

  if (req.method === "POST") {

    const { email, feedback } = req.body;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback
    }

    const filePath = buildFeedbackPath()
    const data = extractFeedbacks(filePath)
    data.push(newFeedback)
    fs.writeFileSync(filePath, JSON.stringify(data))
    res.status(201).json({
      message: 'Success!',
      email,
      feedback
    })

  } else {
    const filePath = buildFeedbackPath()
    const data = extractFeedbacks(filePath)
    res.status(200).send({
      message: "This works",
      feedbacks: data
    })
  }
}