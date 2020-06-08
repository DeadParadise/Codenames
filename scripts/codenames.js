var words1 = ['ATLANTIS', 'SPY', 'TIME', 'CZECH', 'KETCHUP', 'SHOE', 'THEATER', 'BANK', 'BED', 'TEMPLE', 'HEART', 'FENCE', 'HONEY', 'EGYPT', 'SINK', 'ROCK'];
var word1 = words1[Math.floor(Math.random()*words1.length)];

var words2 = ["BLOCK", "DOCTOR", "SOCK", "CHURCH", "WALL", "PAPER", "LOG", "POINT", "LAP", "EUROPE", "BOX", "MINE", "RAY", "ORANGE", "JET", "NAIL"];
var word2 = words2[Math.floor(Math.random()*words2.length)];

var words3 = ["AIR", "COOK", "CARROT", "CARD", "PLATE", "GHOST", "ENGLAND", "SHAKESPEARE", "VACUUM", "LEMON", "RABBIT", "TELESCOPE", "SPOT", "SPRING", "WITCH", "HIMALAYAS"];
var word3 = words3[Math.floor(Math.random()*words3.length)];

var words4 = ["BELT", "MERCURY", "EYE", "SCREEN", "PIRATE", "GROUND", "MILLIONAIRE", "TRIP", "UNICORN", "OPERA", "FILM", "CONDUCTOR", "TAP", "SUB", "STAR", "COURT"];
var word4 = words4[Math.floor(Math.random()*words4.length)];

var words5 = ["STICK", "HORN", "LUCK", "WELL", "TICK", "NEEDLE", "SWING", "PARACHUTE", "CROSS", "PYRAMID", "COPPER", "THIEF", "ROME", "MICROSCOPE", "DIAMOND", "BOND"];
var word5 = words5[Math.floor(Math.random()*words5.length)];


function wordFunction() {
document.getElementById("card-1").textContent=word1;
document.getElementById("card-2").textContent=word2;
document.getElementById("card-3").textContent=word3;
document.getElementById("card-4").textContent=word4;
document.getElementById("card-5").textContent=word5;
}

//Code for changing card color
var button = document.getElementById("card-1");


button.addEventListener("click", function() {
    const curColour = document.getElementById("card-1").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-1").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-1").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-1").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-1").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-1").style.backgroundColor = "firebrick";
    }
});

var button = document.getElementById("card-2");

button.addEventListener("click", function() {
    const curColour = document.getElementById("card-2").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-2").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-2").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-2").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-2").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-2").style.backgroundColor = "firebrick";
    }
});
var button = document.getElementById("card-3");

button.addEventListener("click", function() {
    const curColour = document.getElementById("card-3").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-3").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-3").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-3").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-3").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-3").style.backgroundColor = "firebrick";
    }
});
var button = document.getElementById("card-4");

button.addEventListener("click", function() {
    const curColour = document.getElementById("card-4").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-4").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-4").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-4").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-4").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-4").style.backgroundColor = "firebrick";
    }
});
var button = document.getElementById("card-5");

button.addEventListener("click", function() {
    const curColour = document.getElementById("card-5").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-5").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-5").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-5").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-5").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-5").style.backgroundColor = "firebrick";
    }
});

var button = document.getElementById("card-6");

button.addEventListener("click", function() {
    const curColour = document.getElementById("card-6").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-6").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-6").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-6").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-6").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-6").style.backgroundColor = "firebrick";
    }
});

var button = document.getElementById("card-7");

button.addEventListener("click", function() {
    const curColour = document.getElementById("card-7").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-7").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-7").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-7").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-7").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-7").style.backgroundColor = "firebrick";
    }
});

var button = document.getElementById("card-8");

button.addEventListener("click", function() {
    const curColour = document.getElementById("card-8").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-8").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-8").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-8").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-8").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-8").style.backgroundColor = "firebrick";
    }
});

var button = document.getElementById("card-9");

button.addEventListener("click", function() {
    const curColour = document.getElementById("card-9").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-9").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-9").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-9").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-9").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-9").style.backgroundColor = "firebrick";
    }
});

var button = document.getElementById("card-10");

button.addEventListener("click", function() {
    const curColour = document.getElementById("card-10").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-10").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-10").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-10").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-10").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-10").style.backgroundColor = "firebrick";
    }
});

var button = document.getElementById("card-11");

button.addEventListener("click", function() {
    const curColour = document.getElementById("card-11").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-11").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-11").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-11").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-11").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-11").style.backgroundColor = "firebrick";
    }
});

var button = document.getElementById("card-12");

button.addEventListener("click", function() {
    const curColour = document.getElementById("card-12").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-12").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-12").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-12").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-12").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-12").style.backgroundColor = "firebrick";
    }
});

var button = document.getElementById("card-13");

button.addEventListener("click", function() {
    const curColour = document.getElementById("card-13").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-13").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-13").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-13").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-13").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-13").style.backgroundColor = "firebrick";
    }
});

var button = document.getElementById("card-14");

button.addEventListener("click", function() {
    const curColour = document.getElementById("card-14").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-14").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-14").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-14").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-14").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-14").style.backgroundColor = "firebrick";
    }
});

var button = document.getElementById("card-15");

button.addEventListener("click", function() {
    const curColour = document.getElementById("card-15").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-15").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-15").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-15").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-15").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-15").style.backgroundColor = "firebrick";
    }
});

var button = document.getElementById("card-16");

button.addEventListener("click", function() {
    const curColour = document.getElementById("card-16").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-16").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-16").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-16").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-16").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-16").style.backgroundColor = "firebrick";
    }
});

var button = document.getElementById("card-17");

button.addEventListener("click", function() {
    const curColour = document.getElementById("card-17").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-17").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-17").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-17").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-17").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-17").style.backgroundColor = "firebrick";
    }
});

var button = document.getElementById("card-18");

button.addEventListener("click", function() {
    const curColour = document.getElementById("card-18").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-18").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-18").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-18").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-18").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-18").style.backgroundColor = "firebrick";
    }
});

var button = document.getElementById("card-19");

button.addEventListener("click", function() {
    const curColour = document.getElementById("card-19").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-19").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-19").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-19").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-19").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-19").style.backgroundColor = "firebrick";
    }
});

var button = document.getElementById("card-20");

button.addEventListener("click", function() {
    const curColour = document.getElementById("card-20").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-20").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-20").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-20").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-20").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-20").style.backgroundColor = "firebrick";
    }
});

var button = document.getElementById("card-21");

button.addEventListener("click", function() {
    const curColour = document.getElementById("card-21").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-21").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-21").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-21").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-21").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-21").style.backgroundColor = "firebrick";
    }
});

var button = document.getElementById("card-22");

button.addEventListener("click", function() {
    const curColour = document.getElementById("card-22").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-22").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-22").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-22").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-22").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-22").style.backgroundColor = "firebrick";
    }
});

var button = document.getElementById("card-23");

button.addEventListener("click", function() {
    const curColour = document.getElementById("card-23").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-23").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-23").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-23").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-23").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-23").style.backgroundColor = "firebrick";
    }
});

var button = document.getElementById("card-24");

button.addEventListener("click", function() {
    const curColour = document.getElementById("card-24").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-24").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-24").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-24").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-24").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-24").style.backgroundColor = "firebrick";
    }
});

var button = document.getElementById("card-25");

button.addEventListener("click", function() {
    const curColour = document.getElementById("card-25").style.backgroundColor;

    if (curColour === 'firebrick') {
        document.getElementById("card-25").style.backgroundColor = "teal";
    }
      else if (curColour === 'teal') {
        document.getElementById("card-25").style.backgroundColor = "gray";
    }
      else if (curColour === 'gray') {
        document.getElementById("card-25").style.backgroundColor = "black";
    }
      else if (curColour === 'black') {
        document.getElementById("card-25").style.backgroundColor = "#C78E00";
    }
    else {
        document.getElementById("card-25").style.backgroundColor = "firebrick";
    }
});