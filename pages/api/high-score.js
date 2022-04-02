import { validate } from "jsonschema"
import { getScores, addHighScore } from "../../services/fireBase"

const highScoreSchema = {
  'type': 'object',
  'properties': {
    'score': {
      'type': 'number'
    },
    'datetime': {
      'type': 'string'
    },
    'name': {
      'type': 'string'
    }
  },
  "required": [ "score", "datetime", 'name' ]
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
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
  let isValid = validate(highScoreObject, highScoreSchema).valid
  if (!highScoreObject) {
    return 'Need highscore'
  } else if (!isValid) {
    return 'Json not valid'
  } else {
    return null
  }
}