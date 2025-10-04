import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ to, children }) {
  return (
    <Link to={to} className={styles.button}>
      {children}
    </Link>
  );
}

export default Button;
