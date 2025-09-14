TP1 - Proyecto Web en Equipo
IFTS · Frontend · Grupo 2

Integrantes
•	Córdoba, Daniel Ignacio
•	Gómez, Cecilia
•	Giménez, Mariela Belén
•	Lucchelli, Eugenia
•	Ríos, Román

Descripción del Proyecto
Este proyecto consiste en un sitio web grupal desarrollado como Trabajo Práctico 1, que incluye una portada del equipo, páginas individuales con la presentación personal de cada integrante, una sección de bitácora y funciones dinámicas implementadas con JavaScript.
El objetivo principal es aplicar HTML, CSS y JavaScript siguiendo buenas prácticas de organización de archivos, diseño adaptable (responsive design) y funciones dinámicas.
El sitio incluye:
•	Una página principal (index.html) con acceso a todas las tarjetas.
•	Páginas individuales para cada integrante, con información personal, gustos e intereses.
•	Estilos visuales consistentes y legibles, utilizando Google Fonts.
•	Funcionalidades dinámicas implementadas en JavaScript en cada tarjeta.
•	Diseño adaptable con breakpoints para dispositivos móviles, tablets y escritorio.

Tecnologías Utilizadas
•	HTML5 para la estructura de las páginas.
•	CSS3 para los estilos, incluyendo responsive design.
•	JavaScript para la interactividad dinámica.
•	Google Fonts para la tipografía.
•	Git/GitHub para control de versiones.

Estructura de Archivos
La organización del proyecto sigue las buenas prácticas de separación de responsabilidades:
ifts-front-tp1-main/
│── index.html            # Página principal del sitio
│── belen.html            # Página individual de Belén Giménez
│── bitacora.html         # Bitácora del proyecto
│── cesu.html             # Página individual de Cecilia Gómez
│── daniel.html           # Página individual Daniel Córdoba
│── euge.html             # Página individual Euge Lucchelli
│── roman.html            # Página individual Román Ríos
│── css/                  # Hojas de estilo
│   ├── belen.css
│   ├── bitacora.css
│   ├── cesu.css
│   ├── dani.css
│   ├── euge.css
│   ├── index.css
│   ├── roman.css
│── js/                      # Funciones dinámicas
│   ├── belen.js
│   ├── cesu.js
│   ├── daniel.js
│   ├── euge.js
│   ├── index.js
│   ├── roman.js
│── img/                     # Imágenes y avatares
│   ├── barriochino.jpg
│   ├── cesu-imagen.png
│   ├── fondoDani.jpg
│   ├── fondoMain.png
│   ├── fondobelen.jpg
│   ├── fotoDani.png
│   ├── fotoEu.png
│   ├── ifts_logo.svg
│   ├── perfilbelen.png
│   ├── roman.png
│── README.md                # Documentación del proyecto

Funcionalidades JavaScript
index.js:
•	Añade interactividad a las tarjetas de la página principal.  
•	Cuando el mouse entra en una tarjeta (mouseenter), esta se resalta con la clase activa.  
•	Cuando el mouse sale (mouseleave), se quita el resaltado.
belen.js:
•	Botón “Más sobre mí”: despliega/oculta información adicional de la tarjeta.  
•	Cambia dinámicamente el texto del botón a “Ocultar información” o “Más sobre mí” según corresponda.  
•	Implementa además un sistema de pestañas (.tab-btn) para navegar entre diferentes secciones del perfil.
cesu.js:
•	Contiene una lista de chistes predefinidos.
•	Mediante la función, al interactuar con el botón, se muestra un chiste aleatorio dentro de la tarjeta de Cesu.
•	Permite generar dinamismo y humor en la presentación personal.
daniel.js:
•	Función toggleInfo() alterna la visualización de una sección oculta (extraInfo).  
•	Al hacer clic en un botón, se muestra u oculta información extra sobre el perfil.
euge.js:
•	Función “mostrarBelgrano()”: activa o desactiva un pop up con información adicional.  
•	Utiliza la clase “show” para mostrar/ocultar la ventana emergente con un efecto dinámico.
roman.js:
•	Implementa un sistema de personalización visual mediante botones:  
•	“roman_random_color_btn”: cambia los colores del fondo, texto y tarjeta con una paleta aleatoria.  
•	“roman_random_font_btn”: alterna la tipografía del perfil con fuentes aleatorias.
•	Brinda al usuario la posibilidad de modificar el estilo de la tarjeta en tiempo real.  

Enlace al Proyecto Desplegado: https://ifts-front-tp1.vercel.app/



