var canvas = document.getElementById("canvas") ;
var ctx = canvas.getContext("2d") ;

var x = canvas.width/2 ;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var ballRadius = 10 ;
var paddleHeight = 10 ;
var paddleWidth = 75 ;
var paddleX = (canvas.width - paddleWidth)/2 ;
var paddleX = (canvas.width - paddleWidth)

function drawBall(){
      ctx.beginPath();
      ctx.arc(x,y,ballRadius,0,Math.PI);
      ctx.fillstyle = "orangered";
      ctx.fill();
      ctx.closePath();
      
}


function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX,canvas.height-paddleHeight,paddleHeight,paddleWidth);
    ctx.fillstyle = "orangered";
    ctx.fill();
    ctx.closePath();
}

function draw(){
    ctx.clearRectangle(0,0,canvas.width,canvas.height) ;
      drawBall();
      x += dx;
      y += dy;

      if(y+dy < ballRadius || y+dy > canvas.height - ballRadius){
        dy = -dy ;
    } 

    
    if(y+dx <  ballRadius || x+dx > canvas.width - ballRadius){
        dx = -dx ;
    } 
      
}

setInterval(draw,10)