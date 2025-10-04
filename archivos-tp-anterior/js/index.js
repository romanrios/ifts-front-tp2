document.addEventListener("DOMContentLoaded", () => {
  const personas = document.querySelectorAll(".persona");

  personas.forEach(persona => {
    persona.addEventListener("mouseenter", () => {
      persona.classList.add("activa");
    });

    persona.addEventListener("mouseleave", () => {
      persona.classList.remove("activa");
    });
  });
});