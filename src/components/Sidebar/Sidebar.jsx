import { Link } from "react-router-dom";
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="./public/logo-grupo.svg"
        alt="Logo del grupo"
        className={styles.logo}
      ></img>
      <h2 className={styles.title}>Grupo 2</h2>
      <nav>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link to="/" className={styles.link}>Portada</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/integrantes" className={styles.link}>Integrantes</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/musica" className={styles.link}>Música</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/peliculas" className={styles.link}>Películas</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/bitacora" className={styles.link}>Bitácora</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/diagramas" className={styles.link}>Diagramas</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
