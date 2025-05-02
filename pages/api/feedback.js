import path from 'path';
import fs, { readFileSync } from 'fs'

export default function feedbackHandler(req, res) {

  if (req.method === "POST") {

    const { email, feedback } = req.body;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback
    }

    const filePath = path.join(process.cwd(), 'data', 'feedback.json');
    const fileData = fs.readFileSync(filePath)
    const data = JSON.parse(fileData);
    data.push(newFeedback)
    fs.writeFileSync(filePath, JSON.stringify(data))
    res.status(201).json({
      message: 'Success!',
      email,
      feedback
    })

  }
  res.status(200).send({
    message: "This works"
  })
}