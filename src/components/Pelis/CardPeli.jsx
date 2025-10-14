import styles from "./CardPeli.module.css";


function CardPeli({ peli }) {
  return (
    <div className={styles.peliCard}>
      <h3>{peli.Title}</h3>
      <img src={peli.Poster} alt={peli.Title} />
    </div>
  );
}

export default CardPeli;
