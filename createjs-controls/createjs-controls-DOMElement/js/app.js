let canvas;
let stage;
let container;
let content;

canvas = document.getElementById("gameView");
stage = new createjs.Stage(canvas);
container = new createjs.Container();
stage.addChild(container);
container.x = 120;
container.y = 0;
content = new createjs.DOMElement("box");
container.addChild(content);

stage.update();