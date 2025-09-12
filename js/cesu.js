
         /*JS Cesu*/

// lista de chistes malos
const cesuChistes = [
  "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
  "¿Qué le dice una iguana a su hermana gemela? Somos iguanitas.",
  "¿Cómo se dice pañuelo en japonés? Saka-moko.",
  "¿Cómo maldice un pollito a otro pollito? ¡Caldito seas!",
  "¿Sabías que en Hawai no te hospedan? Te 'ALOHAN'"
];

const cesuChisteItem = document.getElementById("cesu-chiste");
const cesuChisteTexto = document.getElementById("cesu-chiste-texto");

// función chiste aleatorio
function cesuMostrarChiste() {
  const randomIndex = Math.floor(Math.random() * cesuChistes.length);
  cesuChisteTexto.textContent = cesuChistes[randomIndex];
}

// evento de click
cesuChisteItem.addEventListener("click", cesuMostrarChiste);