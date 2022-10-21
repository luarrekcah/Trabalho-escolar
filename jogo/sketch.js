let bird;
let pipes;
let parallax = 0.8;
let score = 0;
let maxScore = 0;
let birdSprite;
let pipeBodySprite;
let pipePeakSprite;
let bgImg;
let bgX;
let gameoverFrame = 0;
let isOver = false;

let touched = false;
 prevTouched = touched;


function preload() {
  pipeBodySprite = loadImage('./graphics/pipe_marshmallow_fix.png');
  pipePeakSprite = loadImage('./graphics/pipe_marshmallow_fix.png');
  birdSprite = loadImage('./graphics/train.gif');
  bgImg = loadImage('./graphics/background.png');
}

function setup() {
  createCanvas(800, 500);
   reset();
}

function draw() {
  background(0);
  // Draw our background image, then move it at the same speed as the pipes
  image(bgImg, bgX, 0, bgImg.width, height);
  bgX -= pipes[0].speed * parallax;

  // this handles the "infinite loop" by checking if the right
  // edge of the image would be on the screen, if it is draw a
  // second copy of the image right next to it
  // once the second image gets to the 0 point, we can reset bgX to
  // 0 and go back to drawing just one image.
  if (bgX <= -bgImg.width + width) {
    image(bgImg, bgX + bgImg.width, 0, bgImg.width, height);
    if (bgX <= -bgImg.width) {
      bgX = 0;
    }
  }

  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].update();
    pipes[i].show();

    if (pipes[i].pass(bird)) {
      score++;
    }

    if (pipes[i].hits(bird)) {
      gameover();
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if ((frameCount - gameoverFrame) % 150 == 0) {
    pipes.push(new Pipe());
  }

  showScores();

  // touches is an list that contains the positions of all
  // current touch points positions and IDs
  // here we check if touches' length is bigger than one
  // and set it to the touched var
  touched = (touches.length > 0);

  // if user has touched then make bird jump
  // also checks if not touched before
  if (touched && !prevTouched) {
    bird.up();
  }

  // updates prevTouched
  prevTouched = touched;


}

function showScores() {
  textSize(32);
  text('score: ' + score, 1, 32);
  text('record: ' + maxScore, 1, 64);
}

function gameover() {
    let = document.createElement("img")
    img.src="./graphics/game_over.png";
    document.body.appendChild(img);
    img.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto;"
  maxScore = max(score, maxScore);
  isOver = true;
  noLoop();
}

function reset() {
  isOver = false;
  score = 0; 
  bgX = 0;
  pipes = [];
  bird = new Bird();
  pipes.push(new Pipe());
  gameoverFrame = frameCount - 1;
  loop();
}

function keyPressed() {
  if (key === ' ') {
    bird.up();
    if (isOver) reset(); //you can just call reset() in Machinelearning if you die, because you cant simulate keyPress with code.
  }
}

function touchStarted() {
  if (isOver) reset();
}