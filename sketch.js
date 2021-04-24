const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
    }


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
      var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
      var responsejson = await response.json();
      console.log(responsejson);
      var datetime = responsejson.datetime;
      var min = datetime.slice(14,16);
      console.log(min);
      if(min>=00 && min>=04){
          var bg = "sunrise1.png";
      }
      else if(min>=05 && min>=09){
          var bg = "sunrise2.png";
      }
      else if(min>=10 && min>=14){
        var bg = "sunrise3.png";
    }
    else if(min>=15 && min>=19){
        var bg = "sunrise4.png";
    }
    else if(min>=20 && min>=24){
        var bg = "sunrise5.png";
    }
    else if(min>=25 && min>=29){
        var bg = "sunrise6.png";
    }
    else if(min>=30 && min>=34){
        var bg = "sunrise7.png";
    }
    else if(min>=35 && min>=39){
        var bg = "sunrise8.png";
    }
    else if(min>=40 && min>=44){
        var bg = "sunrise9.png";
    }
    else if(min>=45 && min>=49){
        var bg = "sunrise10.png";
    }
    else if(min>=50 && min>=54){
        var bg = "sunrise11.png";
    }
    else if(min>=55 && min>=60){
        var bg = "sunrise12.png";
    }
    backgroundImg = loadImage(bg);
    console.log(hour);
}
          
      
   
