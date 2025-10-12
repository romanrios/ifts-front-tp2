import React, { useEffect, useState } from "react";
import styles from "./musica.module.css";
import cancionesData from "../data/musica.json";

function Musica() {
  const [canciones, setCanciones] = useState([]);

  useEffect(() => {
    setCanciones(cancionesData);
  }, []);
  
  return (
    <section className={styles.musica}>
      <h2>🎵 Nuestras canciones favoritas</h2>
      <div className={styles.cancionesContainer}>
        {canciones.map((cancion) => (
          <div className={styles.cancionCard} key={cancion.id}>
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
        ))}
      </div>
    </section>
  );
}

export default Musica;