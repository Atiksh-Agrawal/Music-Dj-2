song = "";
function preload(){
harry_potter = loadSound("music.mp3");
peter_pan = loadSound("peter_pan.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.position(700,200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
}

function playMusic(){
    
    var name = document.getElementById("name").value;
  if(name == "peter_pan"){
    
     peter_pan.play();
     }

     if(name == "harry_potter"){
    
        harry_potter.play();
        }

}

function stopMusic(){
   harry_potter.stop();
   peter_pan.stop();
}