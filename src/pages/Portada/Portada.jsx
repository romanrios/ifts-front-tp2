import styles from "./Portada.module.css";

function Portada() {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
  };

  return (
    <>
      <div className={styles.fotoMain}>
        <h1 className={styles.Titulo}>GRUPO DOS</h1>
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
