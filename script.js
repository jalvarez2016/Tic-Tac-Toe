/*global $*/

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

/* this is where code begins being used. you can get rid of everything above*/

    console.log("helloe there");

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    drawEverything();

function drawEverything(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#FF0000";
    ctx.fillRect(15, 10, 10, 10);

    var spacing = 4.3;
    var length = 60;
    var tall = 30;

    /*top row*/
    ctx.fillStyle = "white";
    ctx.fillRect(c.width/spacing, c.height/spacing, length, tall);

    ctx.fillStyle = "white";
    ctx.fillRect(c.width/spacing * 2, c.height/spacing, length, tall);

    ctx.fillStyle = "white";
    ctx.fillRect(c.width/spacing * 3, c.height/spacing, length, tall);

    /*middle row*/

    ctx.fillStyle = "white";
    ctx.fillRect(c.width/spacing, c.height/spacing * 2, 20, 10);

    ctx.fillStyle = "white";
    ctx.fillRect(c.width/spacing * 2, c.height/spacing * 2, 20, 10);

    ctx.fillStyle = "white";
    ctx.fillRect(c.width/spacing * 3, c.height/spacing * 2, 20, 10);

    /*bottom row*/

    ctx.fillStyle = "white";
    ctx.fillRect(c.width/spacing * 1, c.height/spacing * 3, 20, 10);

    ctx.fillStyle = "white";
    ctx.fillRect(c.width/spacing * 2, c.height/spacing * 3, 20, 10);

    ctx.fillStyle = "white";
    ctx.fillRect(c.width/spacing * 3, c.height/spacing * 3, 20, 10);

    

}

   