// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { addWord, removeWord, getAllWords, iAmSorry } from "../../services/fireBase"

export default async function handler(req, res) {
  if (req.method === 'POST'){
    var response
    if (req.body.iAmSorry){
      response = iIsSorry(req)

    } else {
      response = postWord(req)
    }
    if (response.error){
      res.status(400).json(response)
    } else { 
      res.status(200).json(response)
    }
  } else if (req.method === 'DELETE') {
    let response = deleteWord(req)
    if (response.error){
      res.status(400).json(response)
    } else { 
      res.status(200).json(response)
    }
  } else if (req.method === 'GET') {
    res.status(200).json({ word: await getRandomWord() })
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}

function postWord(req){
  let word = req.body.word

  let errorMessage = wordValidation(word)

  if (errorMessage) {
    return {'error': errorMessage}
  }

  addWord(word)

  return {'response': 'Word was added to list'}
}

function iIsSorry(req){
  let word = req.body.word

  iAmSorry(word)

  return {'response': 'Your complaint has been submitted, our reponse time is up to 86 hours'}
}


function deleteWord(req){
  let word = req.body.word

  let isWordInvaild = wordValidation(word)

  if (isWordInvaild) {
    return {'error': isWordInvaild}
  }

  removeWord(word)

  return {'response': 'Word has been removed from te list'}
}

async function getRandomWord(){
  let allWords = await getAllWords()
  return allWords[Math.floor(Math.random() * allWords.length)]
}

function wordValidation(word) {
  if (!word) {
    return 'Enter a word'
  } else if(word.length != 5) {
    return 'Enter a word with 5 letters'
  } else if (!/^[a-zA-Z]+$/.test(word)){
    return 'Enter a word that only contains letters'
  }

  return null
}
