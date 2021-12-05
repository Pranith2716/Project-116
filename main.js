noseX=0;
noseY=0;
function preload(){
mustache=loadImage("https://i.postimg.cc/HLWcgFKT/clipart-mustache-brown-8.png");
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
  
 }

 function gotPoses(results){
  if (results.length>0){
    console.log(results);
  noseX=results[0].pose.nose.x-35;
  noseY=results[0].pose.nose.y-25;
  console.log("nose x =" +noseX);
  console.log("nose y =" +noseY);
  
  }


}

function modelLoaded(){
  console.log("PoseNet is intializing")
}
function draw(){
  image(video,0,0,300,300);
  image(mustache,noseX,noseY,100,100);
  }


function take_snapshot(){    
    save('myFilterImage.png');
  }