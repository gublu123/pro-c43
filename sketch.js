var bg,bg2,form,system,code,security;
var score=0, backgroundImg, backgroundImg1, treasure;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  //backgroundImg = loadImage("aladdin_cave2.jpg");
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
  // add code for changing the background to the treasure background
  backgroundImg.loadImage("treasure.jpg");
  

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
    backgroundImg.loadImage("treasure.jpg");
  }

  drawSprites()
}