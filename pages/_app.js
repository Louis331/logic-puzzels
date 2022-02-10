import '../styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link
          href='https://fonts.googleapis.com/css?family=Rubik'
          rel='stylesheets'
        />
        <link rel="icon" href="/duck.gif" type='image/gif'/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
