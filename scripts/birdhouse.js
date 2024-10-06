let smaller_window_size;
let canvas_scale_x = 0.85;
let canvas_scale_y = 0.7;
let windows_width;
let windows_height;
let button;

let pixel_fracture = 1000; // divide smaller window size on this var to get one unit of size;
let unit;
let cam;
let music;
let musicOn = false;

function preload() {
    font = loadFont('./assets/fonts/Asap-Regular.otf');
    music = loadSound('assets/music/MICROMECHA - Sands Of Time.mp3');
}

function setup() {
    button = createButton('🎵: OFF');
    button.position(window.innerWidth - 100, 100);
    button.mousePressed(toggleMusic);

    frameRate(60) //this is default behaviour but I want to be specific because get_time_cycle() relies on it
    textFont(font);
    windows_width = window.innerWidth * canvas_scale_x;
    windows_height = window.innerHeight * canvas_scale_y;

    unit = Math.min(windows_width, windows_height) / pixel_fracture;


    let canvasContainer = document.getElementById('birdhouse-canvas');
    createCanvas(windows_width, windows_height, WEBGL).parent(canvasContainer);

    background(200);

    angle = 0;
    cam = createCamera();
    cam.setPosition(0, 0, 5500 * unit);
    cam.lookAt(0, 0, 0);
    translate(0, 0, 0)
    textFont(font);
    textSize(36);
}
function toggleMusic() {
    console.log(musicOn)
    musicOn = !musicOn;
    if (musicOn) {
        button.html('🎵: ON'); // Change button text to ON when active
        music.play();
    } else {
        button.html('🎵: OFF'); // Change button text to OFF when inactive
        music.pause();
    }
}
function draw() {


    orbitControl(1, 1, 1);
    console.log(get_time_cycle(10))
    background(get_time_cycle(10) * 150 / 2)
    //draw_debug()
    let camX = 5000 * unit * cos(angle);
    let camY = 100; // Fixed height for the camera
    let camZ = 5000 * unit * sin(angle);
    angle += 0.01;

    // Set the camera position and target
    cam.setPosition(camX, camY, camZ);
    cam.lookAt(0, 0, 0);

    stroke('black');
    strokeWeight(2);
    draw_bottom();
    draw_front_wall();
    draw_back_wall();
    draw_right_wall()
    draw_left_wall()
    draw_right_roof()
    draw_left_roof()
    draw_front_gable()
    draw_back_gable()
    draw_hole()
    draw_perch()
}

function get_time_cycle(period = 1) {
    return sin(frameCount / 60 * 2 * PI / period) + 1;
}

function get_time_cycle_minus(period = 1) {
    return sin(frameCount / 60 * 2 * PI / period);
}

function draw_bottom() {
    translate(0, 600 * unit + 100 * unit * get_time_cycle(4), 0)
    box(880 * unit, 100 * unit, 880 * unit, 0, 0)
    translate(0, -600 * unit - 100 * unit * get_time_cycle(4), 0)
}

function draw_front_wall() {
    translate(0, 250 * unit, 300 * unit + 100 * unit * get_time_cycle(6))
    box(600 * unit, 600 * unit, 100 * unit, 0, 0)
    translate(0, -250 * unit, -300 * unit - 100 * unit * get_time_cycle(6))
}
function draw_back_wall() {
    translate(0, 250 * unit, -300 * unit - 100 * unit * get_time_cycle(6))
    box(600 * unit, 600 * unit, 100 * unit, 0, 0)
    translate(0, -250 * unit, 300 * unit + 100 * unit * get_time_cycle(6))
}
function draw_right_wall() {
    translate(350 * unit + 150 * unit * get_time_cycle(3), 250 * unit, 0)
    box(100 * unit, 600 * unit, 700 * unit, 0, 0)
    translate(- 350 * unit - 150 * unit * get_time_cycle(3), - 250 * unit, 0)
}

function draw_left_wall() {
    translate(-350 * unit - 150 * unit * get_time_cycle(3), 250 * unit, 0)
    strokeWeight(4)
    stroke('white')
    fill('black')
    box(100 * unit, 600 * unit, 700 * unit, 0, 0)
    strokeWeight(2)
    stroke('black')
    normalMaterial()
    translate(350 * unit + 150 * unit * get_time_cycle(3), - 250 * unit, 0)
}
function draw_left_roof() {
    rotate(QUARTER_PI);
    translate(-350 * unit - 150 * unit * get_time_cycle(3), 0, 0)
    normalMaterial()
    stroke('black');
    strokeWeight(1);
    box(100 * unit, 800 * unit + 250 * unit * get_time_cycle(3), 880 * unit, 0, 0)
    translate(350 * unit + 150 * unit * get_time_cycle(3), 0, 0)
    rotate(-QUARTER_PI);
}

function draw_right_roof() {
    rotate(-QUARTER_PI);
    translate(350 * unit + 150 * unit * get_time_cycle(3), 50 * unit, 0)
    strokeWeight(2)
    stroke('white')
    fill('black')
    box(100 * unit, 700 * unit, 880 * unit, 0, 0)
    stroke('black')
    translate(-350 * unit - 150 * unit * get_time_cycle(3), -50 * unit, 0)
    rotate(QUARTER_PI);
}
function draw_front_gable() {
    beginGeometry()

    normalMaterial()
    translate(0, -50 * unit, 350 * unit + 200 * unit * get_time_cycle(6))
    triangle(375 * unit, 0, -375 * unit, 0, 0, -375 * unit,)
    translate(0, 0, -100 * unit - 60 * unit * get_time_cycle(6))

    triangle(375 * unit, 0, -375 * unit, 0, 0, -375 * unit,)
    translate(0, 0, +100 * unit + 60 * unit * get_time_cycle(6))
    translate(0, 50 * unit, -350 * unit - 200 * unit * get_time_cycle(6))

    front_gable = endGeometry()

    model(front_gable);
}

function draw_back_gable() {
    beginGeometry()

    normalMaterial()
    translate(0, -50 * unit, -350 * unit - 250 * unit * get_time_cycle(3))
    triangle(-375 * unit, 0, 375 * unit, 0, 0, -375 * unit)
    translate(0, 0, 100 * unit + 100 * unit * get_time_cycle(3))

    triangle(-375 * unit, 0, 375 * unit, 0, 0, -375 * unit)
    translate(0, 0, -100 * unit)
    translate(0, 50 * unit, +350 * unit + 250 * unit * get_time_cycle(3))

    front_gable = endGeometry()
    model(front_gable);
}
function draw_hole() {
    translate(0, 0, 303 * unit + 200 * get_time_cycle(6) * unit)

    rotate(HALF_PI, [1, 0, 0])
    noStroke()
    fill('black')
    cylinder(105 * unit, 100 * unit + 400 * get_time_cycle(6) * unit);
    normalMaterial()
    rotate(-HALF_PI, [1, 0, 0])
    translate(0, 0, -303 * unit - 200 * get_time_cycle(6) * unit)
}
function draw_perch() {
    translate(0, 100, 410 * unit + 150 * unit * get_time_cycle(6))

    rotate(HALF_PI, [1, 0, 0])
    cylinder(25 * unit, 150 * unit);
    rotate(-HALF_PI, [1, 0, 0])
    translate(0, -100, -410 * unit - 150 * unit * get_time_cycle(6))
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
