import Image from "next/image";
import styles from "../styles/Details.module.scss";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const PersonDetailCard = ({ person }) => {
  return (
    <>
      <div className={styles.title}>
        <h1>Person Details</h1>
      </div>
      <div className={styles.card}>
        <Image
          loader={myLoader}
          src={person.photoUrl}
          width="200"
          height="200"
          alt="profile-photo"
        />
        <p>{person.name}</p>
        <p>{person.jobTitle}</p>
        <p>{person.email}</p>
        <p>{person.phone}</p>
        <p>{person.address}</p>
      </div>
    </>
  );
};

export default PersonDetailCard;
