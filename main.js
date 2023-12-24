noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    canvas = createCanvas(600,500);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550, 600);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Posenet is initialized!");
}

function draw() {
    background("#87CEEB");
    document.getElementById("font-size").innerHTML = "The font-size will be " + difference + " pixels.";
    stroke('#8B0000');
    text("Ashu", noseX, noseY);
    textSize(difference);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + ", and noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + ", and rightWristX = " + rightWristX + ". Therefore, the difference is " + difference); 
    }
}
