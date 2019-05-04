let canvas;
let stage;
let container;
let bitmap;

canvas = document.getElementById("gameView");
stage = new createjs.Stage(canvas);
container = new createjs.Container();
stage.addChild(container);

bitmap = new createjs.Bitmap("./img/1.jpg");
container.addChild(bitmap);

createjs.Ticker.framerate = 20;
createjs.Ticker.addEventListener("tick",function(){
    stage.update();
})