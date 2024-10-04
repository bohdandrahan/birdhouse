let smaller_window_size;
let canvas_scale_x = 0.85;
let canvas_scale_y = 0.7;
let windows_width;
let windows_height;

let pixel_fracture = 1000; // divide window size on this var to get one unit of size;
let unit;

function preload() {
    font = loadFont('/assets/inconsolata.otf');
}

function setup() {
    textFont(font);
    windows_width = window.innerWidth * canvas_scale_x;
    windows_height = window.innerHeight * canvas_scale_y;

    unit = Math.min(windows_width, windows_height) / pixel_fracture;


    let canvasContainer = document.getElementById('birdhouse-canvas');
    createCanvas(windows_width, windows_height, WEBGL).parent(canvasContainer);

    background(200);

    cam = createCamera();
    cam.setPosition(100, -400, 800);
    cam.lookAt(0, 0, 0);
    translate(0, 0, 0)
    textFont(font);
    textSize(36);
}

function draw() {

    draw_debug()
    orbitControl(3, 3, 1);
}

function draw_debug() {
    background(200)
    fill('deeppink');

    translate(0, 0, 0)
    fill('red');
    circle(0, 0, 100 * unit);

    fill('green')
    sphere(10)

    translate(500 * unit, 0, 0)
    textSize(32);
    fill('purple')
    text('x', 0, 0);
    translate(-500 * unit, 0, 0)

    translate(0, 500 * unit, 0)
    textSize(32);
    fill('purple')
    text('y', 0, 0);
    translate(0, -500 * unit, 0)

    translate(0, 0, 500 * unit)
    textSize(32);
    fill('purple')
    text('z', 0, 0);

    normalMaterial();
    translate(0, 0, 0)
}
