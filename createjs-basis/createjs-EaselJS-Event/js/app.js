let canvas;
let container;
let stage;
let circle;
let circleSpeedX;

canvas = document.getElementById("gameView");
stage = new createjs.Stage(canvas);
container = new createjs.Container();
stage.addChild(container);

circle = new createjs.Shape();
circle.graphics.beginFill("#ff0000").drawCircle(50,50,50);
container.addChild(circle);

stage.update();

circle.addEventListener("click",function(e){
    // alert("惦记我了呀");
    alert("x:"+e.localX+",y:"+e.localY);
})

createjs.frametate= 20;
createjs.Ticker.addEventListener("tick",handlerTick);

circleSpeedX = 10;
function handlerTick(){
    if(circle.x<=0){
        circleSpeedX = Math.abs(circleSpeedX);
    }
    if(circle.x>=300){
        circleSpeedX = -Math.abs(circleSpeedX)
    }
    circle.x += circleSpeedX;
    stage.update();
}