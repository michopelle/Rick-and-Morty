import styles from "../styles/Home.module.css";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

const FETCH_EPISODES = (episodeId: number | undefined) => {
  return gql`
      query {
        episodesByIds(ids: [${episodeId}]) {
          name
          air_date
          created
          characters {
            name
            status
            species
            gender
            image
          }
        }
      }
    `;
};

const CustomerList = ({
  characters,
}: {
  characters: IEpisode["characters"];
}) => {
  return (
    <>
      {characters.map((character, index) => (
        <div key={index}>
          <Link
            href={{
              pathname: "/charactors",
              query: {
                gender: character.gender,
                image: character.image,
                name: character.name,
                species: character.species,
                status: character.status,
              },
            }}
          >
            <a>{character.name}</a>
          </Link>
          <br />
        </div>
      ))}
    </>
  );
};

const FetchEpisodes = ({ id }: { id: number | undefined }) => {
  const {
    data,
    loading,
    error,
  }: {
    data: { episodesByIds: IEpisodesByIds } | undefined;
    loading: any;
    error?: any;
  } = useQuery(FETCH_EPISODES(id));

  if (loading) return <div>'Loading...'</div>;
  if (error) return <div>`Error! ${error.message}`</div>;

  if (data) {
    const { air_date, characters, created, name } = data.episodesByIds[0];
    return (
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <h4>
            <b>{`Episode ${id} - ${name}`}</b>
          </h4>
          <p>Created: {created}</p>
          <p>Air Date: {air_date}</p>
          <p>Character List:</p>
          <nav>
            <ul className={styles.charactersList}>
              <CustomerList characters={characters} />
            </ul>
          </nav>
        </div>
      </div>
    );
  }
  return null;
};

export const DisplaySection = ({ id }: { id: number | undefined }) => {
  return (
    <div className={styles.displaySection}>
      <FetchEpisodes id={id} />
    </div>
  );
};
