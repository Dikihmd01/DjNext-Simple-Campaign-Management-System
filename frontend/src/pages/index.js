import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data, done, error }) {
  // console.log(data)
  return (
    <>
      <main>
        <h1>Campaigns</h1>
        {error}
        {data.map((campaign) => (
          <div key={campaign.slug}>
            <div>
              <Image
                src={"https://res.cloudinary.com/dfnyqebmz/" + campaign.logo}
                width={200}
                height={200}
                alt={campaign.title}
              />
            </div>

            <div>
              <h3>{campaign.title}</h3>
              <p>{campaign.description}</p>
              <p>Created at <i>{campaign.create_date}</i></p>
            </div>
            <hr />
          </div>
        ))}
      </main>
    </>
  );
}

export async function getStaticProps() {
  let campaigns = [];
  let error = null
  try {
    const url = "http://127.0.0.1:8000/api/campaigns";
    const response = await fetch(url)
    campaigns = await response.json()
  } catch (e) {
    error = e.message
  }

  return {
    props: {
      data: campaigns,
      error: error,
      done: true,
    }
  }
}