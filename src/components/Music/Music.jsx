import styles from "./Music.module.css";

function Music({ cancion }) {
  return (
    <div className={styles.cancionCard}>
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

export default Music;