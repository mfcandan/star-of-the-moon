import Image from "next/image";
import styles from "../styles/Details.module.scss";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const details = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Person Details</h1>
        </div>
        <div href="https://nextjs.org/docs" className={styles.card}>
          <Image
            loader={myLoader}
            src="https://airnfts.s3.amazonaws.com/profile-images/0xD9c4216cFE7c70344f80035B0bf5FBE01AA69d37_1619305985184.png"
            width="200"
            height="200"
            alt="profile-photo"
          />
          <p>Fatih Candan</p>
          <p>Frontend Developer</p>
          <p>mfatihcandan@gmail.com</p>
          <p>+90 555 555 55 55</p>
          <p>İstanbul / Maltepe</p>
        </div>
        <button className={styles.bckBtn}>Go back to Home Page</button>
      </main>
    </div>
  );
};

export default details;
