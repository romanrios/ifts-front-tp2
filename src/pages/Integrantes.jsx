import Card from "../components/Card/Card";
import { integrantes } from "../data/integrantes";

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
      <div style={containerStyle}>
        {integrantes.map((int) => (
          <Card key={int.id} integrante={int} />
        ))}
      </div>
    </>
  );
}

export default Integrantes;
