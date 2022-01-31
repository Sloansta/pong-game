const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

function render() {
    requestAnimationFrame(render);
    clear();
    draw();
    //logic();
}
render();

function draw() {
    // do drawing stuff here.
}

function clear() {
    c.fillStyle = 'red';
    c.fillRect(0, 0, WIDTH, HEIGHT);
}