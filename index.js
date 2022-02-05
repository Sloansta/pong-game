const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
// import { Player } from './src/Player'; thought that import would work for front end as well but it doesn't without third party software lol

// width and height will need to be tweaked.
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

const player = new Player(WIDTH/2);

function render() {
    requestAnimationFrame(render);
    clear();
    draw();
    //logic();
}
render();

function draw() {
    // do drawing stuff here.
    player.drawSelf(c);
}

function clear() {
    c.fillStyle = 'black';
    c.fillRect(0, 0, WIDTH, HEIGHT);
}