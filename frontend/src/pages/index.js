import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { formatDate } from '../utils/formatDate';

export default function Home({ data, done, error }) {
  return (
    <>
      <Head>
        <title>Campaign Management - Home</title>
        <meta name="description" content="Campaign Management Site" />
      </Head>
      <main className={styles.main}>
        <div className={styles.innerContent}>
          <h1>Campaigns</h1>
          {error}
          {data.map((campaign) => (
            <div key={campaign.slug} className={styles.item}>
              <div>
                <Image
                  className={styles.img}
                  src={"https://res.cloudinary.com/dfnyqebmz/" + campaign.logo}
                  width={200}
                  height={200}
                  alt={campaign.title}
                />
              </div>

              <div className={styles.itemRight}>
                <h3>{campaign.title}</h3>
                <p>{campaign.description}</p>
                <p>{formatDate(campaign.create_date)}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  let campaigns = [];
  let error = null

  try {
    const url = `${process.env.BASE_API_URL}/campaigns`;
    const response = await fetch(url)
    campaigns = await response.json()
  } catch (e) {
    error = e.message ? e.message : "Someting went wrong, please check again!";
  }

  return {
    props: {
      data: campaigns,
      error: error,
      done: true,
    }
  }
}