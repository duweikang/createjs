let canvas;
let stage;
let container;
let circle1;
let circle2;

canvas = document.getElementById("gameView");
stage = new createjs.Stage(canvas);
container = new createjs.Container();
stage.addChild(container);

circle1 = new Circle();
circle1.setCircleType(Circle.TYPE_GREEN)
// container.addChild(circle1);

circle2 = new Circle();
circle2.setCircleType(2)
container.addChild(circle2);
stage.update();