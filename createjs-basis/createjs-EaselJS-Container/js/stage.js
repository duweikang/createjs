let canvas = document.getElementById("gameView");
let stage = new createjs.Stage(canvas);
let gameView = new createjs.Container();
stage.addChild(gameView);

let people = new peopleContainer();
gameView.addChild(people);

stage.update();