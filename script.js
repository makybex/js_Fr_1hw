function linkSait() {
    document.location.href = "https://tut.by";
}
var block = document.getElementById("center");

function addColor() {
    if (block.style.backgroundColor == "grey") {
        block.style.backgroundColor = "red";
    } else {
        block.style.backgroundColor = "grey";
    }
};

function FlexBox() {
    var body = document.querySelector("body");
    body.innerHTML = '<div id="flexxBox"></div>';

    var section = document.getElementById("flexxBox");
    for (var i = 1; i <= 6; i++) {
        section.innerHTML += "<p>" + i + "Flex box " + "</p>";
    }
    section.style.display = "flex";
    section.style.justifyContent = "space-between";



    var boxFlexs = document.querySelectorAll("p");
    for (var boxFlex of boxFlexs) {
        boxFlex.style.marginRight = "30px";
        boxFlex.style.padding = "15px";
        boxFlex.style.backgroundColor = "green";
    }
};