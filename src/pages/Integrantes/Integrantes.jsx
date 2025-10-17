import CardIntegrante from "../../components/CardIntegrante/CardIntegrante";
import { integrantes } from "../../data/integrantes";
import styles from "./Integrantes.module.css";

function Integrantes() {
  return (
    <section className={styles.integrantes}>
      <h2>Integrantes</h2>
      <br />
      <div className={styles.container}>
        {integrantes.map((int) => (
          <CardIntegrante key={int.id} integrante={int} />
        ))}
      </div>
    </section>
  );
}

export default Integrantes;
