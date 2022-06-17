import Link from "next/link";
import { person } from ".";
import PersonDetailCard from "../components/PersonDetailCard";
import styles from "../styles/Details.module.scss";

const details = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <PersonDetailCard person={person} />
        <Link href="/">
          <button className={styles.bckBtn}>Go back to Home Page</button>
        </Link>
      </main>
    </div>
  );
};

export default details;
