import styles from "./CardPelicula.module.css";


function CardPelicula({ peli }) {
  return (
    <div className={styles.peliCard}>
      <h3>{peli.Title}</h3>
      <img src={peli.Poster} alt={peli.Title} />
    </div>
  );
}

export default CardPelicula;
