import { getAllWords } from "../../services/fireBase"

export default async function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ words: await getAllWords() })
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}