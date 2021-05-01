canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
var lastPOX, lastPOY;

var mouseEvent = "empty";
color = "blue";
lineWidth = 3;

canvas.addEventListener("mousedown", my_mousedown)

function my_mousedown(a) {
    color = document.getElementById("inputcolor").value;
    lineWidth = document.getElementById("inputwidth").value;
    mouseEvent = "mousedown";
    console.log(mouseEvent);
}

canvas.addEventListener("mouseup", my_mouseup)

function my_mouseup(a) {
    mouseEvent = "mouseup";
    console.log(mouseEvent);
}

canvas.addEventListener("mouseleave", my_mouseleave)

function my_mouseleave(a) {
    mouseEvent = "mouseleave";
    console.log(mouseEvent);
}

canvas.addEventListener("mousemove", my_mousemove)

function my_mousemove(a) {
   
    currentPOTX = a.clientX - canvas.offsetLeft;
    currentPOTY = a.clientY - canvas.offsetTop;

    if (mouseEvent =="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.moveTo(lastPOX, lastPOY);
        ctx.lineTo(currentPOTX, currentPOTY);
        ctx.stroke();
    }

    lastPOX = currentPOTX;
    lastPOY = currentPOTY;
}

width = screen.width;
height = screen.height;
newidth = screen.width - 70;
newheight = screen.height - 300;

if (width < 992) {
    document.getElementById("myCanvas").width = newidth;
    document.getElementById("myCanvas").height = newheight;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    console.log("my_touchstart");
    color = document.getElementById("inputcolor").value;
    width_of_line = document.getElementById("inputwidth").value;

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {

    console.log("my_touchmove");
    currentPOTX = e.touches[0].clientX - canvas.offsetLeft;
    currentPOTY = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("X = " + last_position_of_x + "Y = " + last_position_of_y);

    ctx.moveTo(lastPOX, lastPOY);

    console.log("Current position of x and y coordinates = ");
    console.log("X  = " + currentPOTX + "Y = " + currentPOTY);

    ctx.lineTo(currentPOTX, currentPOTY);
    ctx.stroke();

    lastPOX = currentPOTX;
    lastPOY = currentPOTY;
}