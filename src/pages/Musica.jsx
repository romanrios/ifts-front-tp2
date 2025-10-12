import React, { useEffect, useState } from "react";
import styles from "./musica.module.css";

function Musica() {
  const [canciones, setCanciones] = useState([]);

  useEffect(() => {
    // Carga el archivo JSON
    fetch("/public/musica.json")
      .then((response) => response.json())
      .then((data) => setCanciones(data))
      .catch((error) => console.error("Error al cargar el JSON:", error));
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