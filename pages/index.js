import Head from 'next/head'
import Link from 'next/link'
import Layout from '../comps/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Layout>
    <Head>
        <title>Twinhance</title>
        <meta name="keywords"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      </div>
    </Layout>
    </>
  )
}
