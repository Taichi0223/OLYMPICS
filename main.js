
my_canvas = document.getElementById("canvas");
lol = my_canvas.getContext("2d");


lol.beginPath();
lol.strokeStyle = "blue";
lol.lineWidth = 3;
// arc(x,y,radius, startangle, endangle)
//Math.PI = 180
lol.arc(300, 200, 40, 0, 2 * Math.PI);
lol.stroke();

lol.beginPath();
lol.strokeStyle = "black";
lol.lineWidth = 3;
// arc(x,y,radius, startangle, endangle)
//Math.PI = 180
lol.arc(400, 200, 40, 0, 2 * Math.PI);
lol.stroke();

lol.beginPath();
lol.strokeStyle = "red";
lol.lineWidth = 3;
// arc(x,y,radius, startangle, endangle)
//Math.PI = 180
lol.arc(500, 200, 40, 0, 2 * Math.PI);
lol.stroke();

lol.beginPath();
lol.strokeStyle = "orange";
lol.lineWidth = 3;
// arc(x,y,radius, startangle, endangle)
//Math.PI = 180
lol.arc(350, 250, 40, 0, 2 * Math.PI);
lol.stroke();

lol.beginPath();
lol.strokeStyle = "green";
lol.lineWidth = 3;
// arc(x,y,radius, startangle, endangle)
//Math.PI = 180
lol.arc(450, 250, 40, 0, 2 * Math.PI);
lol.stroke();