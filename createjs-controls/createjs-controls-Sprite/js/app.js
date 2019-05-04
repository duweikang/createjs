let canvas;
let stage;
let container;
let spriteSheet;
let sprite;

canvas = document.getElementById("gameView");
stage = new createjs.Stage(canvas);
container = new createjs.Container();
stage.addChild(container);

spriteSheet = new createjs.SpriteSheet({
    "images":["./img/xuebi.png"],
    "frames":{
        "width":80,
        "height":80,
        "count":16
    },
    "animations":{
        "down":[0,3],
        "left":[4,7],
        "right":[8,11],
        "up":[12,15]
    }
});
sprite = new createjs.Sprite(spriteSheet,"walk");
container.addChild(sprite);

createjs.Ticker.framerate = 5;
createjs.Ticker.addEventListener("tick",stage);