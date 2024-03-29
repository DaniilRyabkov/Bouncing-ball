var canvas = document.getElementById("canvas");//холст 200 на 200
var ctx = canvas.getContext("2d");

var Ball = function (){
    this.x = 100;
    this.y = 100;
    this.xSpeed = -2;
    this.ySpeed = 3;
};

var circle = function(x,y,radius,fillCircle){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2,false);
    if(fillCircle){
        ctx.fill();
    } else{
        ctx.stroke();
    }
};
Ball.prototype.draw = function (){
    circle(this.x,this.y,3,true);
};

Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
};

Ball.prototype.checkCollision = function () {
if (this.x < 0 || this.x > 200) {
    this.xSpeed = -this.xSpeed;
}
if (this.y < 0 || this.y > 200) {
    this.ySpeed = -this.ySpeed;
    }
};
var ball = new Ball();

setInterval(function () {
    ctx.clearRect(0, 0, 200, 200);
    ball.draw();
    ball.move();
    ball.checkCollision();
    ctx.strokeRect(0, 0, 200, 200);
}, 30);