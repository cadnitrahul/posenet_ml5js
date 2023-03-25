// let capture;
// let posenet;
// let noseX,noseY;
// let singlePose;

// let shahrukh_img;

// function setup(){
//     createCanvas(800,500);

//     console.log('Setup function');
    // shahrukh_img = loadImage('images/shahrukh.webp',)


    // capture=createCapture(VIDEO)
    // capture.hide();

    // posenet=ml5.poseNet(capture,modelLoaded);
    // posenet.on('pose',recievedPoses)

// }

// function recievedPoses(poses){
//     console.log(poses);

//     if(poses.length > 0){
//         singlePose=poses[0].pose;
//         noseX=singlePose.rightEye.x;
//         noseY=singlePose.rightEye.y;
//     }
//     console.log(noseX + " " + noseY);
// }

// function modelLoaded(){
//     console.log('Model has loaded');
// }


// function getRandomArbitrary(min,max){
//     return Math.random()*(max-min)+min;
// }
// function draw(){
//     image(capture,0,0,800,600);
//     fill(255,0,0);
//     ellipse(noseX,noseY,30,30);
    // image(shahrukh_img,mouseX,mouseY,100,100);
    // r=getRandomArbitrary(0,255);
    // g=getRandomArbitrary(0,255);
    // b=getRandomArbitrary(0,255);
    // fill(r,g,b);
    // ellipse(mouseX,mouseY,50,50);
    // // background(200);
    //point
    // point(200,200);
    //line
    // line(200,200,300,300);
    //triangle
    // triangle(100,200,300,400,150,450);
    // rectangle
    // rect(500,200,100,100);
    //circle
    // ellipse(600,300,100,100);
     
    //stroke and color
    // fil l(132,100,45,100);
    // stroke(255,0,0,100);
    // strokeWeight(5);
    // ellipse(100,200,100,100);
    // ellipse(250,200,100,100);
    // ellipse(400,200,100,100);
    // ellipse(550,200,100,100);
    // ellipse(700,200,100,100);

// }








let capture;
let posenet;
let noseX,noseY;
let reyeX,reyeY;
let leyeX,leyeY;
let singlePose,skeleton;
let actor_img;
let specs,smoke;

function setup() {
    createCanvas(800, 500);
    capture = createCapture(VIDEO)
    capture.hide();

    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose',receivedPoses);

    actor_img = loadImage('images/shahrukh.webp');
    specs = loadImage('images/specs.jpg');
    smoke = loadImage('images/cigar.jpg');

}

function receivedPoses(poses){
    console.log(poses);

    if(poses.length > 0){
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}

function modelLoaded() {
    console.log('Model has loaded');
}

function draw() {

    // images and videos(webcam)
    image(capture, 0, 0);
    fill(255,0,0);

    if(singlePose){
        for(let i=0; i<singlePose.keypoints.length; i++){
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y,20);
        }
        stroke(255,255,255);
        strokeWeight(5);
        for(let j=0; j<skeleton.length; j++){
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
        }

        // image(actor_img,singleP ose.nose.x-45,singlePose.nose.y-60,200,200);
        // image(specs,singlePose.nose.x-35,singlePose.nose.y-50,100,100);
        // image(smoke,singlePose.nose.x-35,singlePose.nose.y+10,40,40);

        
    }

    

}