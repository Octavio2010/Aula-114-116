noseX = ""
noseY = ""

function preload(){
    mascara = loadImage('mascara_flash.png')
}
function setup(){
    canva = createCanvas(650,490);
    canva.center()
    cam = createCapture(VIDEO);
    cam.hide()
    poseNet = ml5.poseNet(cam, modelLoaded)
    poseNet.on("pose", gotPoses)
}
function modelLoaded(){
    console.log("modelo carregado")
}

function draw(){
    image(cam, 0, 0, 650, 490)
    image(mascara, noseX-100, noseY-150, 210, 200)
}

function gotPoses(results){
    if(results.length>0){
    console.log (results)
    noseX = results[0].pose.nose.x
    noseY = results[0].pose.nose.y
    }
}

function takeSnapshot(){
    save("flash.png")
}