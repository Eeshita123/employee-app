var backgroundImg;

var canvas;

var bg = "Day.jpg";

var datbase;

var sign;

var verify;

  function preload() {
    getBackgroundImg();
}



function setup() {
  canvas = createCanvas(displayWidth - 30, displayHeight-40);
  database = firebase.database();

sign = new SignUp;
sign.display();

}

function draw() {
  if(backgroundImg)
  background(backgroundImg);

  textSize(40);

 text(mouseX+","+mouseY,mouseX,mouseY);
  
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();


  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1800){
      bg = "Day.jpg";
  }
  else{
      bg = "Night.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);

}