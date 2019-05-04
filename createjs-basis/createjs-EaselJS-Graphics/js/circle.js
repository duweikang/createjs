function Circle(){
    createjs.Shape.call(this);
    this.setCircleType = function(type){
        switch(type){
            case Circle.TYPE_RED:
                this.setColor("#ff0000");
                break;
            case Circle.TYPE_GREEN:
                this.setColor("#00ff00");
                break;
            default:
                this.setColor("#000000");
                break;
        }
    }
    this.setColor = function(color){
        this.graphics.beginFill(color);
        this.graphics.drawCircle(50,50,50);
        this.graphics.endFill();
    }
    this.setCircleType(Circle.TYPE_RED);
}
Circle.prototype = new createjs.Shape();
Circle.TYPE_RED = 1;
Circle.TYPE_GREEN = 2;