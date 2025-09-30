let exams = [
  { id: 1, title: 'Term 1 - End of Term', date: '2025-10-15', subjects: ['Math','English','SS'] }
]
export default function handler(req, res) {
  if (req.method === 'GET') return res.status(200).json(exams)
  if (req.method === 'POST') {
    const payload = req.body
    payload.id = exams.length + 1
    exams.push(payload)
    return res.status(201).json(payload)
  }
  res.status(405).end()
}
