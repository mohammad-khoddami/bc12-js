// var a = document.getElementById("h1").innerText;
// document.getElementById("h1").innerHTML = "<p>hi my friend</p>";

// console.log(a);

// var paragraphs = document.getElementsByTagName("p");
// paragraphs[1].innerText = "Hello";
// console.log(paragraphs[1].attributes);

// var images = document.getElementsByTagName("img");
// console.log(images[0].attributes);

// document.getElementsByTagName("h1")[0].setAttribute("class", "text-red");

// var image = document.getElementsByTagName("img")[0];
// image.setAttribute("alt", "my image");
// image.setAttribute(
//     "src",
//     "https://dkstatics-public.digikala.com/digikala-products/c22fc663230c689ae58734ec1ce7398eb9c82073_1757310642.jpg",
// );
// image.setAttribute("width", "200px");
// image.setAttribute("height", "200px");

// var myUl = document.getElementsByClassName("list");
// // console.log(myUl[0].children);
// var children = myUl[0].children;
// for (var i = 0; i < children.length; i++) {
//     children[i].innerHTML = children[i].innerHTML + i;
// }

// var lis = document.getElementsByTagName("li");
// for (var i = 0; i < lis.length; i++) {
//     lis[i].innerText = lis[i].innerText + " " + (i + 1);
// }

var myLi = document.getElementsByClassName("list-item");
for (var i = 0; i < myLi.length; i++) {
    if (i % 2 === 1) {
        // myLi[i].setAttribute("class", "text-red");
        myLi[i].classList.add("text-red");
    }
}
