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


