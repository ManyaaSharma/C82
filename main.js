var mouseEvent="empty";
var lastXposition,lastYposition;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
linewidth=3;
canvas.addEventListener("mousedown",myMouseDown);
function myMouseDown(e){
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",myMouseMove);
function myMouseMove(e){
currentXposition=e.clientX-canvas.offsetLeft;
currentYposition=e.clientY-canvas.offsetTop;
if (mouseEvent="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=linewidth;
ctx.moveTo(lastXposition,lastYposition);
ctx.lineTo(currentXposition,currentYposition);
ctx.stroke();   
}
lastXposition=currentXposition;
lastYposition=currentYposition;
}
canvas.addEventListener("mouseup",myMouseUp);
function myMouseUp(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",myMouseLeave);
function myMouseLeave(e){
    mouseEvent="mouseLeave";}
