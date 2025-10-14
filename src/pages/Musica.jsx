import React, { useEffect, useState } from "react";
import styles from "./musica.module.css";
import CardMusica from "../components/CardMusica/CardMusica";
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
          <div key={cancion.id} className={styles.cancionCard}>
            <CardMusica cancion={cancion} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Musica;