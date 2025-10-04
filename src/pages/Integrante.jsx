import { useParams } from "react-router-dom";

const integrantes = [
  { id: 1, nombre: "Daniel Córdoba" },
  { id: 2, nombre: "Cecilia Gómez" },
  { id: 3, nombre: "Mariela Giménez" },
  { id: 4, nombre: "Eugenia Lucchelli" },
  { id: 5, nombre: "Román Ríos" },
];

function Integrante() {
  const { id } = useParams();
  const integrante = integrantes.find((i) => i.id === parseInt(id));

  if (!integrante) return <p>Integrante no encontrado</p>;

  return (
    <>
      <h2>{integrante.nombre}</h2>
      <p>Esta es la página individual de {integrante.nombre}.</p>
    </>
  );
}

export default Integrante;