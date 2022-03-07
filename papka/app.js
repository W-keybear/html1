var clickee = 0;
let boo;
function minus() {
    console.log("-");
    clickee--;
    document.getElementById("clickee").innerHTML = clickee;
    console.log(clickee);
}
function plus() {
    console.log("+");
    clickee++;
    document.getElementById("clickee").innerHTML = clickee;
    console.log(clickee);
}
function reset() {
    clickee = 0;
    document.getElementById("clickee").innerHTML = clickee;
    console.log(clickee);
}

window.addEventListener("click", function() {
    console.log("Clicked");
})
window.addEventListener("scroll", function() {
    console.log("scrolled");
})