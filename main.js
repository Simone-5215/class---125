noseX = 0;
noseY = 0;
difference = 0;
right_wristX = 0;
left_wristX = 0;

function setup()
{
  video = createCapture(VIDEO);
  video.size(550 , 500);

  canvas = createCanvas(550 , 550);
  canvas.position(560 , 150);
  
  poseNet = ml5.poseNet(video , modelLoaded);
  poseNet.on('pose' , gotPoses);
}

function draw()
{
  background('#da95ed');
  fill('#000dff');
  stroke('#2b00ff0');
  square(noseX , noseY , difference);
  document.getElementById("square_site").innerHTML = "width and height of a square will be = " + difference + "px";
}

function modelLoaded()
{
  console.log('PoseNet is inishlized');
}

function gotPoses(results)
{
  if(results.length > 0)
{
  console.log(results);
  noseX = results[0].pose.nose.x;
  noseY = results[0].pose.nose.y;
  console.log("noseX = " + noseX + "noseY = " + noseY);
  left_wristX = results[0].pose.leftWrist.x;
  right_wristX = results[0].pose.rightWrist.x;
  difference = floor(left_wristX - right_wristX);
  console.log("left wristX = " + left_wristX + "right wristX = " + right_wristX + "difference = " + difference);
}
}