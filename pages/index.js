import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wordle clone</title>
      </Head>

      <h1>
        Wordle clone
      </h1>

      <p>This is the companion website to my spreadsheet. On this website you can add and remove words from the valid word list. There is also a leaderboard.</p>
      <img src="/duck.gif" />
    </div>
  )
}
