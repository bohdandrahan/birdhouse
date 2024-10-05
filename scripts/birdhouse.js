let smaller_window_size;
let canvas_scale_x = 0.85;
let canvas_scale_y = 0.7;
let windows_width;
let windows_height;

let pixel_fracture = 1000; // divide window size on this var to get one unit of size;
let unit;

function preload() {
    font = loadFont('./assets/Asap-Regular.otf');
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
    cam.setPosition(0, 0, 3500 * unit);
    cam.lookAt(0, 0, 0);
    translate(0, 0, 0)
    textFont(font);
    textSize(36);
}

function draw() {

    orbitControl(3, 3, 1);
    background(200)
    draw_debug()

    draw_bottom();
    draw_front_wall();
    draw_back_wall();
    draw_right_wall()
    draw_left_wall()
    draw_right_foof()
    draw_left_foof()
}

function draw_bottom() {
    translate(0, 600 * unit, 0)
    box(880 * unit, 100 * unit, 880 * unit, 0, 0)
    translate(0, -600 * unit, 0)
}

function draw_front_wall() {
    translate(0, 250 * unit, 300 * unit)
    box(600 * unit, 600 * unit, 100 * unit, 0, 0)
    translate(0, -250 * unit, -300 * unit)
}
function draw_back_wall() {
    translate(0, 250 * unit, -300 * unit)
    box(600 * unit, 600 * unit, 100 * unit, 0, 0)
    translate(0, -250 * unit, 300 * unit)
}
function draw_right_wall() {
    translate(350 * unit, 250 * unit, 0)
    box(100 * unit, 600 * unit, 700 * unit, 0, 0)
    translate(- 350 * unit, - 250 * unit, 0)
}

function draw_left_wall() {
    translate(-350 * unit, 250 * unit, 0)
    box(100 * unit, 600 * unit, 700 * unit, 0, 0)
    translate(350 * unit, - 250 * unit, 0)
}
function draw_left_foof() {
    rotate(QUARTER_PI);
    translate(-350 * unit, 0, 0)
    normalMaterial()
    box(100 * unit, 800 * unit, 880 * unit, 0, 0)
    translate(350 * unit, 0, 0)
    rotate(-QUARTER_PI);
}

function draw_right_foof() {
    rotate(-QUARTER_PI);
    translate(350 * unit, 50 * unit, 0)
    fill('black')
    box(100 * unit, 700 * unit, 880 * unit, 0, 0)
    translate(-350 * unit, -50 * unit, 0)
    rotate(QUARTER_PI);
}

function draw_debug() {

    fill('deeppink');
    fill('red');
    circle(0, 0, 100 * unit);

    fill('green')
    sphere(10)

    translate(500 * unit, 0, 0)
    textSize(32);
    stroke(255, 204, 0);
    strokeWeight(4);
    fill('black')
    text('moon - x axis', 0, 0);
    translate(-500 * unit, 0, 0)

    translate(0, 500 * unit, 0)
    textSize(32);
    fill('gold')
    text('sun - y axis', 0, 0);
    translate(0, -500 * unit, 0)

    translate(0, 0, 500 * unit)
    textSize(32);
    fill('blue')
    text('earth - z axis', 0, 0);

    normalMaterial();
    translate(0, 0, -500 * unit)
}
