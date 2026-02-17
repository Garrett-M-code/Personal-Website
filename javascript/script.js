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

/**
 * Changes the content in the acitiites section.
 */
function activityChange() {
	var header = document.getElementById("combined-header");
	var text = document.getElementById("combined-text");
	
	if (activity < 1) {
		activity = 5
	} else if (activity > 5) {
		activity = 1;
	}
	
	if (1 == activity) {
		header.innerText = "Small Satellite Reseach Lab";
		text.innerText = "I am a part of Small Satellite Research Lab";
	} else if (2 == activity) {
		header.innerText = "A.R.E.S. Lab";
		text.innerText = "I am a part of the Advanced Research in Exploitation & Security (ARES) Lab";
	} else if (3 == activity) {
		header.innerText = "Hack Pack";
		text.innerText = "I am a part of the Hack Pack";
	} else if (4 == activity) {
		header.innerText = "Dev Dogs";
		text.innerText = "I was a part of Dev Dogs";
	} else if (5 == activity) {
		header.innerText = "More!";
		text.innerText = "I also participate in the following university clubs." +
		"\n\t- Phsyics Club" + 
		"\n\t- Kendo Club" + 
		"\n\t- Budokai Karate" + 
		"\n\t- Chess Club" + 
		"\n\t- Thai Student Associant" + 
		"\n\t- Society of Hispanic Engineers";
	}
}

var activity = 1;

// When the user clicks off
var backgroundBlur = document.getElementById("darken-screen");
backgroundBlur.addEventListener('click', function(event) {
    lightAndClear();
});

// When user clicks left activity
var leftButton = document.getElementsByClassName("arrow-left");
leftButton[0].addEventListener('click', function(event) {
	activity--;
    activityChange();
    console.log(activity);
});

// When user clicks right activity
var rightButton = document.getElementsByClassName("arrow-right");
rightButton[0].addEventListener('click', function(event) {
	activity++;
    activityChange();
});


