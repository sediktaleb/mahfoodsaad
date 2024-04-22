document.getElementById("ex1").style.display = "none";
document.getElementById("ex2").style.display = "none";
document.getElementById("ex3").style.display = "none";

function hiden() {
    var ex = document.getElementById("ex1");
    if (ex.style.display === "block") {
        ex.style.display = "none";
    } else {
        ex.style.display = "block";

    }

};


function hiden1() {
    var ex = document.getElementById("ex2");
    if (ex.style.display === "block") {
        ex.style.display = "none";

    } else {
        ex.style.display = "block";
    }

};

function hiden2() {
    var ex = document.getElementById("ex3");
    if (ex.style.display === "block") {
        ex.style.display = "none";

    } else {
        ex.style.display = "block";
    }

};

document.getElementById("return").addEventListener("click", function() {
    window.open("../../index.html");
    close();
});

function Test(ex) {

    ex.style.animation = "click 1s forward";
    end;

};
var id = null;

function MyMove() {
alert("Coming Soon - قـريــبا");
window.open("../../index.html");

};