let canvas;
let img;
let imgClone;
let mask;

let numOfLinesOfLines;
let linelineWidth;

// var x = (windowWidth - width) / 2;
// var y = (windowHeight - height) / 2;


function setup() {

    canvas = createCanvas(800, 800);
    background(255); //fill(246,234,219);
    img = createGraphics(800, 800);

    //MASK
    mask = createGraphics(800, 800);
    treeShape = mask.triangle(400, 150, 150, 640, 640, 640);

    //TEXT
    textSize(18);
    translate(100, 100);
    rotate(radians(-90));
    textFont('Helvetica');
    text('HAPPY', 20, -70);
    text('HOLIDAYS', -10, -50);

    translate(100, 100);
    rotate(radians(180));
    text('HAPPY', 712, -570);
    text('HOLIDAYS', 685, -550);

    //INITIAL LINES
    let numOfLines = random(2, 30);
    let lineWidth = random(2, 50);

    for (let i = 0; i < numOfLines - 1; i++) {

        let s = random(800);
        let f = random(-100, 100);
        img.strokeWeight(lineWidth);
        img.stroke(0,random(10,50),random(0,20), random(200,255));
        img.line(0, s, 800, s + f);
        img.smooth();

        if (numOfLines <= 10) {
            lineWidth = 50;
        }
    }

   

}

function draw() {
  
    //where the masking happens
    (imgClone = img.get()).mask(mask.get());
    image(imgClone, 0, 0);
}

function drawLines(){
    fill(255);
    //img.noStroke();
    //img.noFill();
  
    let numOfLines = random(2, 30);
    let lineWidth = random(2, 50);

    for (let i = 0; i < numOfLines; i++) {

        let s = random(800);
        let f = random(-300, 300);
        img.strokeWeight(lineWidth);
        img.stroke(0,random(10,50),random(0,20), random(200,255));
        img.line(0, s, 800,  s+f);  // img.line(0, s, 800,  s*f);
        img.smooth();

        if (numOfLines <= 10) {
            lineWidth = 50;
        }
    }
}




function touchStarted() {

    img.rect(-10, -10, 800, 800);
    noStroke();
    rect(120, 120, 550, 550);
    drawLines();
   
}


function keyPressed() {

    if (keyCode === ENTER) {
        saveCanvas(canvas, 'saveMyTree', 'jpg');

    }
}
