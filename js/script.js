var shape = document.getElementById("shape");
var displayTimeElapsed = document.getElementById("time");
var randomInterval = 0;
var randomInterval2 = 0;
var timeElapsed;
var start;
var end;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function spawnTarget() {
    start = new Date().getTime();
    randomInterval = Math.floor(Math.random() * (500-1)) + 1;
    randomInterval2 = Math.floor(Math.random() * (1200-1)) + 1;
    shape.style.display = "block";
    shape.style.top = randomInterval + "px";
    shape.style.left = randomInterval2 + "px";
    shape.style.backgroundColor = getRandomColor();
}

setTimeout(spawnTarget, 1000);

shape.onclick = function() {
    end = new Date().getTime();
    timeElapsed = end - start;
    displayTimeElapsed.innerHTML = "Time elapsed: " + parseFloat(timeElapsed/1000).toFixed(2) + " seconds";
    shape.style.display = "none";
    randomInterval = (Math.floor(Math.random() * (3-1)) + 1) * 1000;
    setTimeout(spawnTarget, randomInterval);
}