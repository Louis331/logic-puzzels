import Head from 'next/head'
import WordInput from '../components/wordInput'
import React from 'react'

export default function NewWord() {
  let extraInfo = React.createRef()

  const addWord = async event => {
    event.preventDefault()
    var word = event.target.word.value

    const resp = await fetch ('/api/word', {
      body: JSON.stringify({
        word: word
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await resp.json()

    console.log(result)

    if (result.error){
      extraInfo.current.innerHTML = result.error
    } else {
      extraInfo.current.innerHTML = result.response
    }
  }

  return (
    <div>
      <Head>
        <title>Add word</title>
      </Head>

      <h1>
        Add word
      </h1>

      <WordInput submitFunction={ addWord } extraInfo={ extraInfo } />
    </div>
  )
}
