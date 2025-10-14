import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Portada from "./pages/Portada";
import Bitacora from "./pages/Bitacora";
import Integrantes from "./pages/Integrantes";
import Integrante from "./pages/Integrante";
import Musica from "./pages/Musica";
import Peliculas from "./pages/Peliculas";


function App() {

  return (
    <div className="app">
      <Sidebar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/bitacora" element={<Bitacora />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/integrantes/:id" element={<Integrante />} />
          <Route path="/musica" element={<Musica />} />
          <Route path="/Peliculas" element={<Peliculas />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
