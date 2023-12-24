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

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}