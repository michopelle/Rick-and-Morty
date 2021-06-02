import { useRouter } from "next/router";
import { ArrowBack } from "@material-ui/icons";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function charactors() {
  const router = useRouter();
  const {
    query: { gender, image, name, species, status },
  } = router;

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.backButton}>
          <Link
            href={{
              pathname: "/",
            }}
          ><button type="button">
            <ArrowBack /></button>
          </Link>
        </div>

        <div className={styles.characterBody}>
          <div>
            <h4 className={styles.title}>Character details</h4>
          </div>
          <div className={styles.characterDetails}>
            <div>{`Name: ${name}`}</div>
            <div>{`Gender: ${gender}`}</div>
            <div>{`Status: ${status}`}</div>
            <div>{`Species: ${species}`}</div>
            {image && (
              <img
                src={typeof image !== "string" ? image[0] : image}
                alt="Picture of the author"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
