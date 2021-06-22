var Tom, Jerry, tomImg1, tomImg2, tomImg3, jerryImg1, jerryImg2, jerryImg3, BG;

function preload() {
    //load the images here
    BG = loadImage("garden.png");
    tomImg1 = loadImage("cat1.png");
    tomImg2 = loadAnimation("cat2.png","cat3.png");
    tomImg3 = loadImage("cat4.png");
    jerryImg1 = loadImage("mouse4.png");
    jerryImg2 = loadAnimation("mouse2.png","mouse3.png");
    jerryImg3 = loadImage("mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    Tom = createSprite(870,600);
    Tom.addImage(tomImg1);
    Tom.scale = 0.2;

    Jerry = createSprite(200,600);
    Jerry.addImage(jerryImg1);
    Jerry.scale = 0.15;
}

function draw() {

    background(BG);
    //Write condition here to evalute if tom and jerry collide
    if(Tom.x - Jerry.x < (Tom.width - Jerry.width)/2){
      Tom.addAnimation("HappyTom", tomImg3);
      Tom.changeAnimation("HappyTom");
      Tom.velocityX = 0;
      Tom.x = 300;
      Tom.scale = 0.2;
      
      Jerry.addAnimation("HappyJerry", jerryImg3);
      Jerry.changeAnimation("HappyJerry"); 
      Jerry.scale = 0.15; 
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        Jerry.addAnimation("JerryTeasing", jerryImg2);
        Jerry.changeAnimation("JerryTeasing");
        Jerry.frameDelay = 25;
    
        Tom.addAnimation("TomMoving", tomImg2);
        Tom.changeAnimation("TomMoving");
        Tom.velocityX = -5;
    }
}
