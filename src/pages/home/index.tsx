import styles from "./index.module.css";
import { Title, Banner } from "components";
import { Card } from "components/Card";
import { movies } from "helpers/json/db";

export const Home = () => {
  return (
    <>
      <Banner image={"home"} />
      <Title>
        <h1>Um lugar para salvar seus vídeos e filmes</h1>
      </Title>
      <section className={styles.container}>
        {movies.map((movie) => {
          return <Card {...movie} key={movie.id} />;
        })}
      </section>
    </>
  );
};
