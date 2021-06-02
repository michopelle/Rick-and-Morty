import { useState } from "react";
import styles from "../styles/Home.module.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { SearchSection } from "./SearchSection";
import { DisplaySection } from "./DisplaySection";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://rickandmortyapi.com/graphql",
});

export default function Home() {
  const [id, setId] = useState<number>();

  return (
    <ApolloProvider client={client}>
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.topLogo} />
          <SearchSection id={id} setId={setId} />
          <DisplaySection
            id={id}
          />
        </div>
      </div>
    </ApolloProvider>
  );
}
