import { useState } from "react";
import { useParams } from "react-router-dom";
import { integrantes } from "../data/integrantes";
import styles from "./Integrante.module.css";
import Button from "../components/Button/Button";

function Integrante() {
  const { id } = useParams();
  const integrante = integrantes.find(i => i.id === parseInt(id));
   const [rotate, setRotate] = useState(false);
  if (!integrante) {
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Integrante no encontrado</p>;
  }

  return (
    <>
      <div className={styles.buttonWrapper}>
        <Button to={`/integrantes/`}>Volver a integrantes</Button>
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
<img
            src={integrante.img}
            alt={integrante.nombre}
            className={styles.avatar}
            style={{
              transform: rotate ? "rotate(360deg)" : "rotate(0deg)",
              transition: "transform 0.5s ease-in-out"
            }}
            onMouseEnter={() => setRotate(true)}
            onMouseLeave={() => setRotate(false)}
          />          <div>
            <h2>{integrante.nombre}</h2>
            <p>{integrante.ubicacion}</p>
            <p>{integrante.edad} años</p>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Habilidades</h3>
          <ul>
            {integrante.habilidades.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Películas Favoritas</h3>
          <ul>
            {integrante.peliculasFavoritas.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Música Favorita</h3>
          <ul>
            {integrante.musicaFavorita.map((m, i) => <li key={i}>{m}</li>)}
          </ul>
        </div>

      </div>
    </>
  );
}

export default Integrante;
