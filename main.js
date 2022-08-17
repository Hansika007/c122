x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak"; 
    recognition.start();
} 

recognition.onresult = function(event)
{
    console.log(event); 

    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content;
    if(content=="Draw a circle")
    {
        console.log("Draw a circle");
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Start Drawing Circle"; 
        draw_circle = "set";
    }
    if(content=="Draw a rectangle")
    {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Start Drawing Rectangle"; 
        draw_rect = "set";
    }
}

function setup()
{
    canvas = createCanvas(900 , 600);
}

function draw()
{
    if (  draw_circle == "set")
    {
        radius = Math.floor(Math.random()*100);
        console.log("radius");
        circle(x,y,radius);
        console.log("circle");
        document.getElementById("status").innerHTML = "Circle is Drawn";
        draw_circle = "";
    }
    if (  draw_rect == "set")
    {
        rect(x,y,70,50);
        console.log("rect");
        document.getElementById("status").innerHTML = "Rectangle is Drawn"; 
        draw_rect = "";
    }
}