import styles from "./portada.module.css";
import Button from "../components/Button/Button";

function Portada() {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
  };

  return (
    <>
      <h1>Grupo 2 · TP02</h1>

      <div className={styles.fotoMain}>
        <div className={styles.Titulo}>GRUPO DOS</div>
      </div>

      <h2>¿Quiénes somos?</h2>

      <ul className={styles.listaMain}>
        <li>Somos un grupo de compañeros juntos desde 2023</li>
        <li>
          Buscamos constantemente mejorar nuestras habilidades de programación
          ayudándonos mutuamente
        </li>
        <li>
          Todos venimos de ramas muy diferentes y aportamos diferentes
          habilidades
        </li>
      </ul>
    </>
  );
}

export default Portada;
