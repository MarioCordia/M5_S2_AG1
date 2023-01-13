const d = document;
var x = 0;
var y = 0;

export function shortcuts(e) {
  console.log(e.type);
  console.log(e);
  if (e.key === "a" && e.altKey) {
    alert("Has lanzado una alerta con el teclado");
  }
  if (e.key === "c" && e.altKey) {
    confirm("Has lanzado una confirmación con el teclado");
  }
  if (e.key === "p" && e.altKey) {
    prompt("Has lanzado un aviso con el teclado");
  }
}

export function moveBall(e, ball, stage) {
  let $ball = d.querySelector(ball);
  let $stage = d.querySelector(stage);
  let limitBall = $ball.getBoundingClientRect();
  let limitStage = $stage.getBoundingClientRect();

  switch (e.keyCode) {
    case 37:
      if (limitBall.left > limitStage.left) {
        e.preventDefault();
        x--;
      }
      break;
    case 38:
      if (limitBall.top > limitStage.top) {
        e.preventDefault();
        y--;
      }
      break;
    case 39:
      if (limitBall.right < limitStage.right) {
        e.preventDefault();
        x++;
      }
      break;
    case 40:
      if (limitBall.bottom < limitStage.bottom) {
        e.preventDefault();
        y++;
      }
      break;
    default:
      break;
  }

  console.log(limitBall, limitStage);
  $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}
