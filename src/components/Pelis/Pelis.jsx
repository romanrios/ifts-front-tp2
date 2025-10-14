import styles from "./pelis.module.css";

function Pelis({ peli }) {
  return (
    <div className={styles.peliCard}>
      <img
        src={cancion.imagen}
        alt={cancion.titulo}
        className={styles.albumImg}
      />
      <h3>{cancion.titulo}</h3>
      <p>{cancion.artista}</p>
      <small>
        {cancion.album} ({cancion.anio})
      </small>
    </div>
  );
}

export default Pelis;