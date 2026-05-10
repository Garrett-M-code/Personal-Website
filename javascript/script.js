const spaceman = document.querySelector('.landing');

window.addEventListener('scroll', () => {
    // requestAnimationFrame ensures smooth execution on mobile browsers
    window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const isMobile = window.innerWidth <= 768;

        // --- Zoom Logic ---
        const startZoom = 140; 
        const endZoom = 100;   
        const zoomSpeed = 0.05;
        const zoom = Math.max(startZoom - scrollY * zoomSpeed, endZoom);

        // --- Parallax Movement ---
        const moveSpeed = 0.3;
        const offsetY = scrollY * moveSpeed;

        if (isMobile) {
            spaceman.style.backgroundSize = `auto ${zoom}%`;
        } else {
            spaceman.style.backgroundSize = `${zoom}% auto`;
        }

        // Apply Parallax (works for both)
        spaceman.style.backgroundPosition = `center -${offsetY}px`;
    });
});

// Text "generation"
const b = baffle('.landing-text');
b.start()
 .set({ characters: '░▒░ ░██░> ████▒ >█░░ ██', speed: 100 })
 .reveal(2000); // Reveals the text over 1 second




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
