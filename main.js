//Setup canvas
let canvas = document.getElementById("graphics");
console.log(canvas);
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
const context = canvas.getContext("2d");



//Set event handlers
document.addEventListener("click", handleMouseClick, false);

function drawBranch(height) {