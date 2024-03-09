var splashScreen;
var backgroundImg;
var playB, infoB;
var gameState = "wait";

function preload(){
    splashScreen = loadImage("./assets/Splashscreen.gif");
    backgroundImg = loadImage("./assets/Backround.jpeg");

}

function setup(){
    createCanvas(windowWidth,windowHeight); //createCanvas(800,800);

    playB=createImg("./assets/play.png");
    playB.position(windowWidth/3,windowHeight/2);
    playB.size(100,100);
    playB.hide();

    infoB=createImg("./assets/About.png");
    infoB.position(windowWidth/2+100,windowHeight/2);
    infoB.size(100,100);
    infoB.hide();
}

function draw(){
    if(gameState == "wait"){
        background(splashScreen);
        playB.show();
        infoB.show();
    }

    playB.mousePressed(() => {
        playB.hide();
        infoB.hide();
        gameState = "level1";
    })

    infoB.mousePressed(()=>{
        playB.hide();
        infoB.hide();
        gameState= 'about';
    })

    if(gameState == "about"){
       aboutGame(); 
    }

    if(gameState == "level1"){
        background(backgroundImg);
    }

   
}

function aboutGame(){
  swal({
    title : "About Game",
    text : "Use Spacebar to shoot the fireballs and arrow keys to move the dragon",
    textAlign : 'center',
    imageUrl : "./assets/Splashscreen.gif",
    imageSize : "200x200",
    confirmButtonText : "Go back to mainscreen",
    confirmButtonColor : "Green"
  },
  function(){
    gameState = "wait"
  })
}