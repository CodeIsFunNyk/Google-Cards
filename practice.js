var grades = {
    maths: "90",
    english: "86",
    hindi: "80",
    socailScience: "99",
    physics: "88"
}

var button = document.querySelector("button");
button.addEventListener("click", function () {
    this.style.color = "red";
});

function abcd() {
    console.log(this);
}

var obj = {
    name: "nikhil"
}

abcd.call(obj);
//By default the value of this in function scope is window so to change this we will use call
//Now "this" will refer to the obj not window
