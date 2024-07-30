function preload(){
    
}
function setup(){
    canva = createCanvas(650,490);
    canva.center()
    cam = createCapture(VIDEO);
    cam.hide()
}
function draw(){
    image(cam, 0, 0, 650, 490)
}