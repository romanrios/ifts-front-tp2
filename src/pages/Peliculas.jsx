import React, { useEffect, useState } from "react";
import styles from "./peliculas.module.css";
import Peli from "../components/Pelis/Pelis";

const claveAPI = import.meta.env.VITE_KEY_API;
const URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${claveAPI}`;

function Pelis() {
  const [peli, setPeli] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      const json = await res.json();
      setPeli(json);
    };
    fetchData();
  }, []);

  return (
    <section className={styles.peli}>
      <h2>🎬 Pelis</h2>
      <div className={styles.pelisContainer}>
        {peli ? (
          <div className={styles.peliCard}>
            <Peli peli={peli} />
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </section>
  );
}

export default Pelis;
