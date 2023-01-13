import hamburgerMenu from "./dom/menu_hamburger.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { shortcuts, moveBall } from "./dom/teclado.js";
import countDown from "./dom/countDown.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("../assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countDown("countdown", "Jan 06, 2023 00:00:00", "¡Día de reyes!")
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
