
const $img = $("#bowl");
const $openButton = $("#open");
const $closeButton = $("#close");


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

