import Head from 'next/head'
import WordInput from '../components/wordInput'
import React from 'react'

export default function NewWord() {
  let extraInfo = React.createRef()
  let textArea = React.createRef()

  const iAmSorry = async event => {
    event.preventDefault()
    console.log(event.target.word)
    var word = event.target.word.value

    const resp = await fetch ('/api/word', {
      body: JSON.stringify({
        word: word,
        iAmSorry: true
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await resp.json()

    console.log(result)

    extraInfo.current.innerHTML = result.response
    event.target.word.value = ''

  }


  return (
    <div>
      <Head>
        <title>I am sorry</title>
      </Head>

      <h1>
        I am sorry
      </h1>

      <form onSubmit={ iAmSorry }>
                <label htmlFor='word'>Why are you sorry and how will you make it up to us</label><br/>
                <b ref={ extraInfo }></b>
                <br/>
                <textarea id='word' name='word' />
                <br/>
                <button type='submit'>Submit</button>
            </form>
    </div>
  )
}
