var countTag = document.getElementById("count"); //string

var count = Number(countTag.innerText);

function handleIncrease() {
    if (count < 5) countTag.innerText = ++count;
    handleStyle();
}

function handleDecrease() {
    if (count > 0) countTag.innerText = --count;
    handleStyle();
}

function handleStyle() {
    var incBtn = document.getElementById("inc");
    var decBtn = document.getElementById("dec");

    if (count >= 5) {
        incBtn.classList.add("disable");
    } else {
        incBtn.classList.remove("disable");
    }

    if (count <= 0) {
        decBtn.classList.add("disable");
    } else {
        decBtn.classList.remove("disable");
    }
}
