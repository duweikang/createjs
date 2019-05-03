let canvas;
let stage;
let circle;
canvas = document.getElementById("gameView");
stage = new createjs.Stage(canvas);
circle = new createjs.Shape();
circle.graphics.beginFill("#ff0000").drawCircle(50,50,50);
stage.addChild(circle);

createjs.Tween.get(circle,{loop:true})
    .wait(1000)
    .to({scaleX:0.2,scaleY:0.2},1000)
    .wait(1000)
    .to({scaleX:1,scaleY:1},1000,createjs.bounceInOut);

createjs.Ticker.framerate = 20;
createjs.Ticker.addEventListener("tick",stage);