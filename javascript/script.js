const spaceman = document.querySelector('.landing');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // --- Zoom Out ---
  const startZoom = 140;  // starting zoom %
  const endZoom = 100;    // final zoom %
  const zoomSpeed = 0.05; // lower = slower zoom

  const zoom = Math.max(startZoom - scrollY * zoomSpeed, endZoom);

  // --- Parallax Movement ---
  const moveSpeed = 0.3; // lower = slower movement
  const offsetY = scrollY * moveSpeed;

  spaceman.style.backgroundSize = `${zoom}% auto`;
  spaceman.style.backgroundPosition = `center -${offsetY}px`;
});

document.getElementById("portfolio-btn").addEventListener("click", function() {
	// Redirect to Portfolio Portion
    window.location.href = "#portfolio";   
});   

document.getElementById("resume-btn").addEventListener("click", function() {
	// Redirect to Resume Portion
    window.location.href = "#resume";   
});   

document.getElementById("resume-to-email").addEventListener("click", function() {
	// Email from Resume
	const url = 'mailto:garrettmoorework@gmail.com';
	window.open(url, '_blank');   
});  

document.getElementById("email-footer").addEventListener("click", function() {
	// Email from Footer
	const url = 'mailto:garrettmoorework@gmail.com';
	window.open(url, '_blank');   
});  

document.getElementById("resume-to-linkedin").addEventListener("click", function() {
	// LinkedIn from Resume
	const url = 'https://www.linkedin.com/in/garrett-moore-/';
	window.open(url, '_blank');
});

document.getElementById("linkedin-footer").addEventListener("click", function() {
	// LinkedIn from Footer
	const url = 'https://www.linkedin.com/in/garrett-moore-/';
	window.open(url, '_blank');
});

document.getElementById("resume-to-github").addEventListener("click", function() {
	// Github from Resume
	const url = 'https://github.com/Garrett-M-code';
	window.open(url, '_blank');
});   

document.getElementById("github-footer").addEventListener("click", function() {
	// Github from Footer
	const url = 'https://github.com/Garrett-M-code';
	window.open(url, '_blank');
}); 
