var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")
    cloud_img = loadImage("cloud.png")
}

function setup() {
    createCanvas(600, 200);
    rand = Math.round(random(0, 100))
  

    //create a trex sprite
    trex = createSprite(50,170,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;

    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;

    invisible_ground = createSprite(200, 190, 400, 20)
    invisible_ground.visible = false;

     



}
function spawnClouds() {
    if (frameCount % 60 === 0) {
        cloud = createSprite(600, Math.round(random(10, 100)), 40, 10)
        cloud.addImage("cloud", cloud_img)
        cloud.scale = 0.125
        cloud.depth = trex.depth
        trex.depth+=1
        cloud.velocityX = -4
    
    }
    
}

function draw() {
    background(0);
    console.log(rand)

    text(mouseX+","+mouseY, mouseX, mouseY)

    //jump when the space button is pressed
    if (keyDown("space") && trex.y >=150) {
         trex.velocityY = -10; 
        }
        
    trex.velocityY = trex.velocityY + 0.8

    if (ground.x < 0) {
        ground.x = ground.width / 2;
        }

    trex.collide(invisible_ground);
    spawnClouds();
    drawSprites();
    }
