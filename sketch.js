const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine;
var world;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8;
var box9,box10,box11,box12,box13,box14;
var box15,box16,box17,box18;
var box19,box20;
var polygon,polygonImage;
var slingshot;
var score = 0 ;
var bgColor = "grey";
function preload(){
    polygonImage = loadImage("polygon.png");   
    getBGColor(); 

}
function setup(){
    createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
    var opts = {
        density: 1

    };
    //creating polygon
    polygon = Bodies.circle(50,400,20,opts);
    World.add(world,polygon);
    ground = new Ground(530,550,300,20);
    //row 1
    box1 = new Box(420,510,30,40);
    box2 = new Box(450,510,30,40);
    box3 = new Box(480,510,30,40);
    box4 = new Box(510,510,30,40);
    box5 = new Box(540,510,30,40);
    box6 = new Box(570,510,30,40);
    box7 = new Box(600,510,30,40);
    box8 = new Box(630,510,30,40);
    //row 2
    box9 = new Box(450,470,30,40);
    box10 = new Box(480,470,30,40);
    box11 = new Box(510,470,30,40);
    box12 = new Box(540,470,30,40);
    box13 = new Box(570,470,30,40);
    box14 = new Box(600,470,30,40);

    //row 3
    box15 = new Box(480,430,30,40);
    box16 = new Box(510,430,30,40);
    box17 = new Box(540,430,30,40);
    box18 = new Box(570,430,30,40);

    //row4
    box19 = new Box(510,390,30,40);
    box20 = new Box(540,390,30,40);

    slingshot = new SlingShot(polygon,{x:50,y:410});
    
}
function draw(){
    background(bgColor);
    Engine.update(engine);
    ground.display();
    fill("blue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    fill("pink");
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    fill("yellow");
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    fill("blue");
    box19.display();
    box20.display();

    imageMode(CENTER);
    image(polygonImage,polygon.position.x,polygon.position.y,40,40);
    
    slingshot.display();
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    text("Score: "+ score ,700,40);
   
}

function mouseDragged(){
    Body.setPosition(polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    
    if(keyCode === 32 ){
        Matter.Body.setPosition(polygon,{x:50,y:400});
        slingshot.attach(polygon);
        
    }
}

async function getBGColor(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/Chicago");
    var responseJson = await response.json();
    var hour  = responseJson.datetime.slice(11,13);
    var bg;
    if(hour >=06 && hour < 19){
        bgColor = "turquoise"
    }
    else
    {
        bgColor = "brown"
    }
    console.log(bgColor);

}