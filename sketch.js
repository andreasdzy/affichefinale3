/* eslint-disable */
//variables
let angle = 0;
//obj3D
let bombe;
let texturebombe;
//background
let fond;
var backg;

//musique
let sound;

//Particules
let particules = []


//graphics
let graphics;

//sprayboulesn Tableau
let genBoules = [];

//diamètre du spray

function preload(){
  bombe = loadModel('bombe2.obj');
  backg = loadImage("Mur_affiche.jpg");
  texturebombe = loadImage('graphit1.jpg')
  fond = loadImage('Mur_affiche2.jpg');
  qr = loadImage('qrcode.png');
  customFont1 = loadFont('Skate Board Unlimited.ttf');
  customFont2 = loadFont('TwCenMTStd-UltraBoldIt.otf');
  customFont3 = loadFont('TwCenMTStd-Italic.otf');
  sound = loadSound('raplibre.mp3')
  spraysound = loadSound('spraysound.mp3')
  
}

// function peinture() {
  
//   for ( let i = 1; i <=10; i++) {
//     graphics.circle(mouseX-(650/2)+random(-20,30), mouseY-(800/2)+random(0,50), random(0,4));
//   }
  

// }


function setup() {
  graphics = createGraphics(600,850)
  createCanvas(600, 850, WEBGL);
 // graphics.position(-300,-450);
  
  //Tableau Spray
  graphics.fill(0)
  for (i = 0; i < 50; i++){
    genBoules[i] = new boules();
    
  }
}


function draw() {
//background()
  graphics.noStroke();
  
  push()
  image(fond, -600/2 , -850/2);
  pop()
  
  push()
  image(qr,190 , 315);
  qr.resize(100, 100);
  pop()

//posiion texte
fill(0) ; 
textFont(customFont2);
textSize(80);
text("GRAPH'IT",-285,-320);  
textFont(customFont1);
textSize(60);
text("C'est de la BOMBE",-230,-255); 
textFont(customFont2);
textSize(50);
fill(255) ;
text("Nouveau Spray",-285,340);  
  
textFont(customFont3);
textSize(30);
fill(255) ;
text("Acrylique Noir longue duree",-250,380);  
  
  
  //Condition pour le Spray
  if (mouseIsPressed){
    for(i = 0; i < genBoules.length; i++){
      genBoules[i].afficher();
      
    }
  }
  
  
  
  
  
  push();
  
  translate(20, 250);
  rotate(3);
  ambientLight(250);
  //directionalLight(255,255,255);
  //ambientMaterial(255)
  texture(texturebombe);
  
  scale(800,850);
  //rotateX(angle*1.5);
  rotateY(angle*2);
  //rotateZ(angle);
  model(bombe);
  angle +=0.01;
  pop();
  
  
  
  

  
  
  
  
  
  
  //  if(mouseIsPressed) {
  // peinture();
//}
 image(graphics,-300,-425)  
 // orbitControl();
  
  
  //Particules blanches
  let p = new Particule()
  let q = new Particule2()
  particules.push(p)
  particules.push(q)

  for (var i = 0; i < particules.length; i++) {
    if(!particules[i].edges()) {
    particules[i].update()
    particules[i].show()
}
    //permet de supprimer les particules hors du cadre
    else {
      particules.splice(i, 1)
    }
}


}

//Activation de la musique et selection de couleurs
function keyPressed() {
  if (key === "ArrowRight") {
    sound.play();
  }
   if (key === "ArrowLeft") {
    sound.pause();
  }
  
  if (key === "a") {
    graphics.fill(250, 228, 21);
  }
  
   if (key === "z") {
    graphics.fill(255);
  }
  if (key === "e") {
    graphics.fill(60, 145, 230);
  }
  
  if (key === "r") {
    graphics.fill(86, 203, 249);
  }
  
  if (key === "t") {
    graphics.fill(60, 173, 73);
  }   
  
  if (key === "y") {
    graphics.fill(250, 130, 23);
  } 
  
  if (key === "u") {
    graphics.fill(0, 255, 255);
  } 
  
  if (key === "i") {
    graphics.fill(134, 0, 255);
  } 
  
  if (key === "o") {
    graphics.fill(0);
  } 
  
} 


function mousePressed() {
  spraysound.play();
}

function mouseReleased() {
  spraysound.pause();
}


