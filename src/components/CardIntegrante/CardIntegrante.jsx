import Button from "../Button/Button";
import styles from "./CardIntegrante.module.css";

function CardIntegrante({ integrante }) {
  return (
    <div className={styles.card}>
      <img src={integrante.img} alt={integrante.nombre} className={styles.cardImg} />
      <h3>{integrante.nombre}</h3>
      <p>{integrante.ubicacion}</p>
      <p>{integrante.edad} años</p>
      <Button to={`/integrantes/${integrante.id}`}>Ver más</Button>
    </div>
  );
}

export default CardIntegrante;
