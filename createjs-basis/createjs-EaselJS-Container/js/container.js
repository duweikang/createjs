function peopleContainer(){
    let head = new createjs.Shape();
    head.graphics.beginFill("#ff0000").drawCircle(50,50,50);
    let leftEye = new createjs.Shape();
    leftEye.graphics.beginFill("#000").drawCircle(35,35,10);
    let rightEye = new createjs.Shape();
    rightEye.graphics.beginFill("#000").drawCircle(65,35,10);
    let mouth = new createjs.Shape();
    mouth.graphics.beginFill("#ccc").drawRect(35,65,30,5);

    let body = new createjs.Shape();
    body.graphics.beginFill("#333").drawRect(25,100,50,80);

    let leftArm = new createjs.Shape();
    leftArm.graphics.beginFill("#666").drawRect(0,100,20,80);
    let rightArm = new createjs.Shape();
    rightArm.graphics.beginFill("#666").drawRect(80,100,20,80);

    let leftLeg = new createjs.Shape();
    leftLeg.graphics.beginFill("#666").drawRect(28,180,20,80);
    let rightLeg = new createjs.Shape();
    rightLeg.graphics.beginFill("#666").drawRect(52,180,20,80);
    
    this.x = 70;
    this.y = 70;
    this.addChild(head);
    this.addChild(leftEye);
    this.addChild(rightEye);
    this.addChild(mouth);
    this.addChild(body);
    this.addChild(leftLeg);
    this.addChild(rightLeg);
    this.addChild(leftArm);
    this.addChild(rightArm);
    
}
peopleContainer.prototype = new createjs.Container();