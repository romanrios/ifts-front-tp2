# IFTS · Frontend · Grupo 2  
### Trabajo Práctico Grupal 2 · Proyecto Web en Equipo

---

## Integrantes
- Córdoba, Daniel Ignacio  
- Gómez, Cecilia  
- Giménez, Mariela Belén  
- Lucchelli, Eugenia  
- Ríos, Román  

---

## Descripción del Proyecto
Sitio web grupal desarrollado como **TP2 de Frontend**, utilizando React y Vite.

---

## Enlace al Proyecto Desplegado
🔗 [https://ifts-front-tp2.vercel.app/](https://ifts-front-tp2.vercel.app/)

---

## Instrucciones para Ejecutar el Proyecto

### 1. Clonar el Repositorio
```bash
git clone https://github.com/<usuario>/<nombre-del-repositorio>.git
cd <nombre-del-repositorio>
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Ejecutar en Modo Desarrollo
```bash
npm run dev
```
Abrir en el navegador: [http://localhost:5173/](http://localhost:5173/)


### 4. (Opcional) Build de Producción
```bash
npm run build
npm run preview
```
### 5. Estructura de Archivos
```bash
ifts-front-tp2/
│
├── public/
│   └── [ imágenes ]
│
├── src/
│   ├── main.jsx           # entrada principal de React
│   ├── App.jsx            # componente raíz
│   ├── index.css          # estilos globales
│   │
│   ├── components/        # componentes reutilizables
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.module.css
│   │   ├── CardBitacora/
│   │   │   ├── CardBitacora.jsx
│   │   │   └── CardBitacora.module.css
│   │   ├── CardIntegrante/
│   │   │   ├── CardIntegrante.jsx
│   │   │   └── CardIntegrante.module.css
│   │   ├── CardMusica/
│   │   │   ├── CardMusica.jsx
│   │   │   └── CardMusica.module.css
│   │   ├── CardPelicula/
│   │   │   ├── CardPelicula.jsx
│   │   │   └── CardPelicula.module.css
│   │   └── Sidebar/
│   │       ├── Sidebar.jsx
│   │       └── Sidebar.module.css
│   │
│   ├── data/              # archivos de datos / JSON
│   │   ├── integrantes.js
│   │   └── musica.json
│   │
│   └── pages/             # vistas / páginas
│       ├── Bitacora/
│       │   ├── Bitacora.jsx
│       │   └── Bitacora.module.css
│       ├── Diagramas/
│       │   ├── Diagramas.jsx
│       │   └── Diagramas.module.css
│       ├── Integrante/
│       │   ├── Integrante.jsx
│       │   └── Integrante.module.css
│       ├── Integrantes/
│       │   └── Integrantes.jsx
│       ├── Musica/
│       │   ├── Musica.jsx
│       │   └── Musica.module.css
│       ├── Peliculas/
│       │   ├── Peliculas.jsx
│       │   └── Peliculas.module.css
│       └── Portada/
│           ├── Portada.jsx
│           └── Portada.module.css
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

