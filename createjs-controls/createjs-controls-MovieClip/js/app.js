let canvas;
let stage;
let container;
let mc;
let circle1;
let circle2;

canvas = document.getElementById("gameView");
stage = new createjs.Stage(canvas);
container = new createjs.Container();
stage.addChild(container);

mc = new createjs.MovieClip(null,0,true,{start:50,end:0});
container.addChild(mc);

circle1 = new createjs.Shape();
circle1.graphics.beginFill("#ff0000").drawCircle(30,30,30);

circle2 = new createjs.Shape();
circle2.graphics.beginFill("#00ff00").drawCircle(30,30,30);

mc.timeline.addTween(createjs.Tween.get(circle1).to({x:0}).to({x:340},100).to({x:0},100));
mc.timeline.addTween(createjs.Tween.get(circle2).to({x:340}).to({x:0},100).to({x:340},100));

mc.gotoAndPlay("start");

createjs.Ticker.framerate = 20;
createjs.Ticker.addEventListener("tick",stage);