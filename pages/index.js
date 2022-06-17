import Head from "next/head";
import Star from "../components/Star";
import PersonCard from "../components/personCard";
import styles from "../styles/Home.module.scss";

export const person = {
  id: 1,
  name: "Fatih Candan",
  jobTitle: "Frontend Developer",
  email: "mfatihcandan@gmail.com",
  phoneNumber: "5064002678",
  photoUrl:
    "https://airnfts.s3.amazonaws.com/profile-images/0xD9c4216cFE7c70344f80035B0bf5FBE01AA69d37_1619305985184.png",
  score: 152,
  address: "İstanbul/Maltepe",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Star of th Month</title>
        <meta
          name="description"
          content="This is month best employee selector app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          <Star />
          <h1>Star of the Month</h1>
        </div>
        <p className={styles.description}>
          Select your great teammate you enjoy working with!
        </p>
        <div className={styles.grid}>
          <PersonCard person={person} />
        </div>
      </main>
    </div>
  );
}
