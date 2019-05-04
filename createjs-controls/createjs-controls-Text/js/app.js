let canvas;
let stage;
let container;
let text;
let rect;
let count;
canvas = document.getElementById("gameView");
stage = new createjs.Stage(canvas);
container = new createjs.Container();
stage.addChild(container);

text = new createjs.Text("this is my controls and count is 0","20px Arial","#fff");
text.x = 50;
text.y = 50;
text.rotation = 20;
container.addChild(text);

rect = new createjs.Shape();
rect.x = text.x;
rect.y = text.y
rect.rotation = text.rotation;
container.addChildAt(rect,0);

createjs.Ticker.framerate = 1;
createjs.Ticker.addEventListener("tick",handlerTick);
count = 0;
function handlerTick(){
    count++;
    text.text = "this is my controls and count is "+count;
    rect.graphics.clear().beginFill("#ff0000").drawRect(-10,-10,text.getMeasuredWidth()+20,text.getMeasuredHeight()+20);
    stage.update();
}