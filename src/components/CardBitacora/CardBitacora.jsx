import styles from "./cardBitacora.module.css";

function CardBitacora({ titulo, children }) {
  return (
    <div className={styles.card}>
      <h2>{titulo}</h2>
      {children}
    </div>
  );
}

export default CardBitacora;
