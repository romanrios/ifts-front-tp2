import styles from "./CardPelicula.module.css";

function CardPelicula({ peli }) {
  const placeholder = "/no-poster.jpg";
  const isPosterValid = peli.Poster && peli.Poster !== "N/A";

  return (
    <div className={styles.peliCard}>
      <h3>{peli.Title}</h3>

      <img
        src={isPosterValid ? peli.Poster : placeholder}
        alt={peli.Title}
        onError={(e) => (e.target.src = placeholder)}
      />
    </div>
  );
}

export default CardPelicula;
