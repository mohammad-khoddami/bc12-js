var user = {
    firstName: "mohammad",
    lastName: "khoddami",
};

// var userStr = JSON.stringify(user);
// console.log(userStr);

// var userObj = JSON.parse(userStr);
// console.log(userObj);

localStorage.setItem("user", JSON.stringify(user));

var pTag = document.getElementById("user");

var lsValue = localStorage.getItem("user");
var parsedValue = JSON.parse(lsValue);

pTag.innerText = `${parsedValue.firstName} ${parsedValue.lastName}`;
