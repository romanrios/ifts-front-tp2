import { Link } from "react-router-dom";

const integrantes = [
  { id: 1, nombre: "Daniel Córdoba" },
  { id: 2, nombre: "Cecilia Gómez" },
  { id: 3, nombre: "Mariela Giménez" },
  { id: 4, nombre: "Eugenia Lucchelli" },
  { id: 5, nombre: "Román Ríos" },
];

function Integrantes() {
  return (
    <>
      <h2>Integrantes</h2>
      <ul>
        {integrantes.map((int) => (
          <li key={int.id}>
            <Link to={`/integrantes/${int.id}`}>{int.nombre}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Integrantes;
