import { getAllWords, addWord } from "../../services/fireBase"

export default async function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ words: await getAllWords() })
  } else if (req.method === 'POST') {
    let words = req.body.words

    res.status(200)

    words.forEach(word => {
        addWord(word)        
    });
    
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}