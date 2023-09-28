song="";
song_1 = "";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
score_leftWrist = 0;
score_RightWrist = 0;

function preload(){
    song=loadSound( " andha.mp3");
    song_1=loadSound( " wellerman.mp3");
}
function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide()
}
function draw(){
image(video,0,0,600,500);
fill("cyan");
stroke("rgb(255,99,71)");
if(score_leftWrist > 0.2){
circle(leftWristX,leftWristY,20);
InNumberleftWristY = Number(leftWristY);
remove_decimals = floor(InNumberleftWristY);
volume = remove_decimals/500;
document.getElementById("volume").innerHTML = "volume " + volume;
song.volume(volume)}


}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);

}
function pause(){
    song.pause();
}

function modelLoaded() {
    console.log("Posenet is initialized");
}

function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
        leftWristX= results[0].pose.leftWrist.x
        leftWristY= results[0].pose.leftWrist.y
        console.log("leftWristX = "+ leftWristX +" leftWristY = " + leftWristY);
        rightWristX= results[0].pose.rightWrist.x
        rightWristY= results[0].pose.rightWrist.y
        console.log("rightWristX = "+ rightWristX +" rightWristY = " + rightWristY);

    }
}