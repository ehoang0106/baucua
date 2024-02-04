
const $img = $("#bowl");
const $openButton = $("#open");
const $closeButton = $("#close");
const $shuffleButton = $("#shuffle")


let atOriginalPosition = true;

const moveDistance = 300;
const speed = 500;

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
    cubes = ["ca", "cua", "bau", "ga", "huu", "tom"];
    var ranCube1 = Math.floor(Math.random() * 6) ;
    var ranCube2 = Math.floor(Math.random() * 6) ;
    var ranCube3 = Math.floor(Math.random() * 6) ;

    var srcCube1 = "./image/" + cubes[ranCube1] + ".png";
    var srcCube2 = "./image/" + cubes[ranCube2] + ".png";
    var srcCube3 = "./image/" + cubes[ranCube3] + ".png";


    $(".first").attr("src", srcCube1);
    $(".second").attr("src", srcCube2);
    $(".third").attr("src", srcCube3);




}

