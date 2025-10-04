import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Portada from "./pages/Portada";
import Bitacora from "./pages/Bitacora";
import Integrantes from "./pages/Integrantes";
import Integrante from "./pages/Integrante";

function App() {

  return (
    <div className="app">
      <Sidebar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/bitacora" element={<Bitacora />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/integrantes/:id" element={<Integrante />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
