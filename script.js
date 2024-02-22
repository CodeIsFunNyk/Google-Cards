// leftFloatingDivAnimation
function leftFloatingDivAnimation() {
    var leftDiv = document.querySelector("#leftDiv");
    var leftFloatingDiv = document.querySelector(".leftFloatingDiv");
    var card = document.querySelector(".card1");
    
    leftDiv.addEventListener("mousemove", function () {
        gsap.to(leftFloatingDiv, {
            left: "60%"
        });
        gsap.to(card, {
            rotateY: "-70deg",
            transform: "translateX(-70%)"
        })
    });
    leftDiv.addEventListener("mouseleave", function () {
        gsap.to(leftFloatingDiv, {
            left: "100%"
        });
        gsap.to(card, {
            rotateY: "0",
            transform: "translateX(0)"
        })
    })
};
leftFloatingDivAnimation();

// rightFloatingDivAnimation
function rightFloatingDivAnimation() {
    var rightDiv = document.querySelector("#rightDiv");
    var rightFloatingDiv = document.querySelector(".rightFloatingDiv");
    var card = document.querySelector(".card1");
    
    rightDiv.addEventListener("mousemove", function () {
        gsap.to(rightFloatingDiv, {
            right: "60%"
        })
        gsap.to(card, {
            rotateY: "70deg",
            transform: "translateX(70%)"
        })
    });
    rightDiv.addEventListener("mouseleave", function () {
        gsap.to(rightFloatingDiv, {
            right: "100%"
        });
        gsap.to(card, {
            rotateY: "0",
            transform: "translateX(0)"
        });
    })
};
rightFloatingDivAnimation();