import Image from "next/image";
import Link from "next/link";
import styles from "../styles/PersonCard.module.scss";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const PersonCard = ({ person }) => {
  return (
    <>
      <div key={person.id} className={styles.card}>
        <Link href="/details">
          <Image
            loader={myLoader}
            src={person.photoUrl}
            width="50rem"
            height="50rem"
            alt="profile-photo"
          />
        </Link>
        <Link href="/details">
          <a>
            <p>
              {person.name} || {person.jobTitle}
            </p>
          </a>
        </Link>

        <button className={styles.upstar}>
          <p>{person.score}</p>
          <div>Up Star</div>
        </button>
      </div>
    </>
  );
};

export default PersonCard;
