const player = document.querySelector("#player");

let xPos = window.innerWidth / 2;
let yPos = window.innerHeight / 2 + 100;

let moveUp = false;
let moveDown = false;
let moveRight = false;
let moveLeft = false;

const speed = 10;

console.log(window.innerWidth);

// Initialize player position
window.addEventListener("DOMContentLoaded", () => {
  player.style.transform = `translate(${xPos}px, ${yPos}px)`;
});

// Keyboard events
document.addEventListener("keydown", (e) => {
  if (e.key === "w") moveUp = true;
  if (e.key === "s") moveDown = true;
  if (e.key === "d") moveRight = true;
  if (e.key === "a") moveLeft = true;
});

document.addEventListener("keyup", (e) => {
  if (e.key === "w") moveUp = false;
  if (e.key === "s") moveDown = false;
  if (e.key === "d") moveRight = false;
  if (e.key === "a") moveLeft = false;
});

// Movement loop
function move() {
  if (moveUp) yPos -= speed;
  if (moveDown) yPos += speed;
  if (moveRight) xPos += speed;
  if (moveLeft) xPos -= speed;

  // Clamp position to keep player on screen
  xPos = Math.min(Math.max(xPos, 0), window.innerWidth - player.offsetWidth);
  yPos = Math.min(Math.max(yPos, 0), window.innerHeight - player.offsetHeight);

  player.style.transform = `translate(${xPos}px, ${yPos}px)`;
  requestAnimationFrame(move);
}
move();

// Teleport to mouse click
document.addEventListener("click", (e) => {
  xPos = Math.min(
    Math.max(e.clientX - player.offsetWidth / 2, 0),
    window.innerWidth - player.offsetWidth
  );
  yPos = Math.min(
    Math.max(e.clientY - player.offsetHeight / 2, 0),
    window.innerHeight - player.offsetHeight
  );

  player.style.transform = `translate(${xPos}px, ${yPos}px)`;
});
