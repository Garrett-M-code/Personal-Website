/**
 * Darkens the screen and creates a blur effect.
 */
function darkAndBlur(option) {
    var dark = document.getElementById("darken-screen");
    dark.style.visibility = "visible";

    var selectedProj = document.getElementById(option);
    selectedProj.style.visibility = "visible";
}

/**
 * Lighten and clears the screen again.
 */
function lightAndClear() {
    var dark = document.getElementById("darken-screen");
    dark.style.visibility = "hidden";

    var selectedProj = document.getElementsByClassName("project-popup");
    for (var i = 0; i < selectedProj.length; i++) {
        selectedProj[i].style.visibility = "hidden";
    }
}

// When the user clicks off
var backgroundBlur = document.getElementById("darken-screen");
backgroundBlur.addEventListener('click', function(event) {
    lightAndClear();
});