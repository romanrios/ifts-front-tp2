import React, { useEffect, useState } from "react";
import Peli from "../components/Pelis/Pelis";
import styles from "./peliculas.module.css";

const claveAPI = import.meta.env.VITE_KEY_API;

function Pelis() {
  const [query, setQuery] = useState("batman"); // default search term
  const [pelis, setPelis] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovies = async (term) => {
    if (!term) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`https://www.omdbapi.com/?s=${term}&apikey=${claveAPI}`);
      const json = await res.json();
      console.log("OMDb data:", json);

      if (json.Response === "True") {
        setPelis(json.Search);
      } else {
        setPelis([]);
        setError(json.Error || "No se encontraron películas 😢");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Error al obtener datos del servidor.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch default movies on mount
  useEffect(() => {
    fetchMovies(query);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies(query);
  };

  return (
    <section className={styles.peli}>
      <h2>🎬 Buscador de pelis</h2>

      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          value={query}
          placeholder="Buscar película..."
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Buscar
        </button>
      </form>

      <div className={styles.pelisContainer}>
        {loading ? (
          <p>Cargando...</p>
        ) : error ? (
          <p>{error}</p>
        ) : pelis.length > 0 ? (
          pelis.map((peli) => (
            <div key={peli.imdbID} className={styles.peliCard}>
              <Peli peli={peli} />
            </div>
          ))
        ) : (
          <p>No hay resultados.</p>
        )}
      </div>
    </section>
  );
}

export default Pelis;
