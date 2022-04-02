import { getScores, addHighScore } from "../../services/fireBase"

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body)
    let score  = req.body
    let notValid = (validateHighScore(score))
    if (notValid){
      res.status(400).json({error: notValid})
    } else {
      addHighScore(score)

      res.status(200).json({'response': 'Score added'})

    }

  } else if (req.method === 'GET') {
    let scores = await getScores()
    res.status(200).json({scores: scores})
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}

function validateHighScore(highScoreObject) {
  if (!highScoreObject) {
    return 'Need highscore'
  } else {
    return null
  }
}