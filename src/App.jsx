import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Portada from "./pages/Portada/Portada";
import Bitacora from "./pages/Bitacora/Bitacora";
import Integrantes from "./pages/Integrantes/Integrantes";
import Integrante from "./pages/Integrante/Integrante";
import Musica from "./pages/Musica/Musica";
import Peliculas from "./pages/Peliculas/Peliculas";
import Diagramas from "./pages/Diagramas/Diagramas";
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
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/diagramas" element={<Diagramas />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
