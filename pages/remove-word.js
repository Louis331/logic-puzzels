import Head from 'next/head'
import WordInput from '../components/wordInput'
import React from 'react'

export default function RemoveWord() {
  let extraInfo = React.createRef()

  const removeWord = async event => {
    event.preventDefault()
    var word = event.target.word.value

    const resp = await fetch ('/api/word', {
      body: JSON.stringify({
        word: word
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
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
        <title>Remove word</title>
      </Head>

      <h1>
        Remove word
      </h1>

      <WordInput submitFunction={ removeWord } extraInfo={ extraInfo } />
    </div>
  )
}
