import styles from "./portada.module.css";
import Button from "../components/Button/Button";

function Portada() {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
  };

    return (
        <>
              <h1>Grupo 2 · TP01</h1>
        <div class="fotoMain">
            <div class="Titulo">GRUPO DOS</div>
        </div>


        <h2>¿Quiénes somos?</h2>

        <ul id="listaMain">
            <li>Somos un grupo de compañeros juntos desde 2023</li>
            <li>Buscamos constantemente mejorar nuestras habilidades de programación ayudandonos mutuamente</li>
            <li>Todos venimos de ramas muy diferentes y aportamos diferentes habilidades</li>
        </ul>

          </>
    );
}

export default Portada;