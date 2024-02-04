
const $img = $("#bowl");
const $openButton = $("#open");
const $closeButton = $("#close");
const $shuffleButton = $("#shuffle")


let atOriginalPosition = true;

const moveDistance = 300;
const speed = 600;

function moveBowlUp(){
    $img.animate({
        bottom: moveDistance + "px"
    }, speed);
}

function moveBowlDown() {
    $img.animate({
        bottom: "0px"
    }, speed);
}

$openButton.on("click", function() {
    moveBowlUp();
});

$closeButton.on("click", function() {
    moveBowlDown();
});

$shuffleButton.on("click", function(){
    rollCube();
});

//roll dice cube

function rollCube () {
    var cubes = ["ca", "cua", "bau", "ga", "huu", "tom"];
    var cubeClasses = [".first", ".second", ".third"];
    
    for (var i = 0; i < cubeClasses.length; i++) {
        var ranIndex = Math.floor(Math.random() * cubes.length);
        var srcCube = "./image/" + cubes[ranIndex] + ".png";
        $(cubeClasses[i]).attr("src", srcCube);
    }

}


