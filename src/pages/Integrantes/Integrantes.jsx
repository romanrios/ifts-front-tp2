import CardIntegrante from "../../components/CardIntegrante/CardIntegrante";
import { integrantes } from "../../data/integrantes";

function Integrantes() {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
  };

  return (
    <>
      <h2>Integrantes</h2>
      <br></br>
      <div style={containerStyle}>
        {integrantes.map((int) => (
          <CardIntegrante key={int.id} integrante={int} />
        ))}
      </div>
    </>
  );
}

export default Integrantes;
