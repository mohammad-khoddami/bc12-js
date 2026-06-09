// var a = document.getElementsByClassName("list-item");

// a[2].style.color = "red";

// a[3].classList.add("text-green");

function handleClick(myEvent, myString) {
    console.log(myEvent);
}

function handleClick2() {
    console.log();
}

var colors = [
    "red",
    "yellow",
    "green",
    "purple",
    "pink",
    "orange",
    "gray",
    "blue",
];

function handleChangeColor() {
    var a = document.getElementById("box");

    var random = Math.floor(Math.random() * colors.length);

    a.style.backgroundColor = colors[random];
}
