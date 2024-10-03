let smaller_window_size;
let canvas_scale;
let unit;

function setup() {
    let canvasContainer = document.getElementById('birdhouse-canvas');

    canvas_scale = 0.8;
    windows_width = window.innerWidth * canvas_scale;
    windows_height = window.innerHeight * canvas_scale;

    unit = Math.min(windows_width, windows_height) / 500


    createCanvas(windows_width, windows_height, WEBGL).parent(canvasContainer);

    background(200);

    cam = createCamera();
    cam.setPosition(0, -400, 800);
    cam.lookAt(10, 20, -30);
    translate(0, 0, 0)
}

function draw() {
    background(200);
    fill('blue');
    circle(0, 0, 100, 10);


    orbitControl(3, 3, 1);

    let x = 25 * sin(frameCount * 0.01) + 100;
    normalMaterial();
    console.log(cam.centerX, cam.centerY, cam.centerZ, cam)
    // box(10)

    // Draw the box.
}
