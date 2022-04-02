import Head from 'next/head'

export async function getStaticProps() {
  let highScores = await (await fetch(process.env.URL + '/api/high-score')).json()
  highScores = highScores.scores

  return {
    props: {
      highScores
    }
  }
}

function HighScore({ highScores }) {
  return (
    <div>
      <Head>
        <title>High score</title>
      </Head>

      <h1>
        High score
      </h1>
      <ul>
        { highScores.map((highScore) => (
          <li>{highScore.name} beat it in {highScore.datetime} seconds with {highScore.score} {highScore.score === 1 ? 'guess': 'guesses'}</li>
        ))}
      </ul>
    </div>
  )
}

export default HighScore