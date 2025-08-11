/**
 * Darkens the screen and creates a blur effect.
 */
function darkAndBlur() {
    var dark = document.getElementById("darken-screen");
    dark.style.visibility = "visible";
}

/**
 * Lighten and clears the screen again.
 */
function lightAndClear() {
    var dark = document.getElementById("darken-screen");
    dark.style.visibility = "hidden";
}


var elements = document.getElementsByClassName("project");
for (var i = 0; i < elements.length; i++) {
    // When the project is hovered over
    elements[i].addEventListener('click', function(event) {
        darkAndBlur();
    });

    // When the hover is removed
    elements[i].addEventListener('mouseout', function(event) {
        lightAndClear();
    });
}   