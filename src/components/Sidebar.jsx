import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Grupo 11</h2>
      <nav>
        <ul>
          <li><Link to="/">Portada</Link></li>
          <li><Link to="/integrantes">Integrantes</Link></li>
          <li><Link to="/bitacora">Bitácora</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
