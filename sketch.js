var bg,bgImage;
var base,baseGroup,base1,base1Group;
var baseImage,base1Image;
var boy,boyImage;
function preload(){
    bgImage = loadImage("Images/tower.png")
    baseImage = loadImage("Images/base.png")
    base1Image = loadImage("Images/base1.png")
    boyImage = loadImage("Images/human.png")
}
function setup(){
    createCanvas(windowWidth/2,windowHeight);
    bg = createSprite(width/2,height/2,width,height)
    bg.addImage(bgImage);
    bg.scale = 1.7;

    boy=createSprite(width/2,-200,10,10);
    boy.addImage(boyImage);
    boy.scale=0.3;
    boy.velocityY = 0;

    baseGroup = new Group();
    base1Group = new Group();
    
}
function draw(){
    background(0);
    Base();
    Base1();
    if(keyDown(LEFT_ARROW)){
        boy.x -=3
    }
    else if(keyDown(RIGHT_ARROW)){
        boy.x +=3
    }
    boy.velocityY += 0.05;
    if (baseGroup.isTouching(boy)){
        boy.velocityY = -3;
   }
   if (base1Group.isTouching(boy)){
    boy.velocityY = -3;
}
    drawSprites()
}
function Base(){
    if (frameCount % 50 === 0 ){
        base = createSprite(0,-10,10,10)
        base.x = Math.round(random(200,width-200))
        base.addImage(baseImage)
        base.velocityY = 5;
        base.lifetime = 510;
        base.depth = boy.depth;
        boy.depth +=1;
        baseGroup.add(base)
        base.debug = true;
        base.setCollider("rectangle",0,-10,base.width,10)
    }
}
function Base1(){
    if (frameCount % 210 === 0 ){
        base1 = createSprite(0,-10,10,10)
        base1.x = Math.round(random(200,width-200))
        base1.addImage(base1Image)
        base1.velocityY = 5;
        base1.lifetime = 510;
        base1.depth = boy.depth;
        boy.depth +=1;
        base1Group.add(base1);
        base1.setCollider("rectangle",0,-10,base1.width,10)
    }
}
