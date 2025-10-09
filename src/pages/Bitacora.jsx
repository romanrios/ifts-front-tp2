import styles from "./bitacora.module.css";

function Bitacora() {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
  };

  return (
    <>
        <div className={styles.fotoMain}>
                <div className={styles.Titulo}>BITACORA</div>
              </div>
        <section className={styles.section}>
      <h2>Decisiones de diseño tomadas por el equipo</h2>
      <p>
        Para la adaptación del trabajo original se volvió a realizar una divisón de tareas, con diferentes integrantes encargados de diferentes componentes o páginas, con el objetivo de <strong> evitar superposición de funciones, conflictos
        de estilos o errores al momento de integrar el proyecto</strong>.
      </p>
      <p>
       Se definió que quien se encargue de un componente o página deberá también desarrollar su <strong>archivo module.css correspondiente</strong>.
      </p>
    </section>

    <section className={styles.section}>
      <h2>Dificultades encontradas y cómo se resolvieron</h2>
      <ul className={styles.listaMain}>
        <li>
          <strong>Cohesión estética:</strong> Al ser realizados los diferentes estilos se tornó un poco más complejo mantener una apariencia cohesiva, por lo que realizamos una segunda revisión para ajustar estos puntos.
        </li>
        <li>
          <strong>Coordinación de entregas:</strong> se organizaron plazos internos para que el trabajo no se acumulara
          al final. Esto permitió detectar a tiempo los problemas de compatibilidad y corregirlos.
        </li>
      </ul>
    </section>

    <section className={styles.section}>
      <h2>Cambios importantes durante la implementación</h2>
      <ul className={styles.listaMain}>
        <li>Se incorporaró un menú de navegación lateral para <strong>facilitar la usabilidad</strong></li>
        <li>Se decidió conservar los estilos y animaciones de forma unificada para los diferentes integrantes para <strong> aprovechar al máximo la modularidad de los componentes</strong>.</li>
      </ul>
    </section>

      
    </>
  );
}

export default Bitacora;
