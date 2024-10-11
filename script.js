document.getElementById("order-btn").addEventListener("click", function() {
    const userResponse = prompt("How many would you like to order?");
    if (userResponse) {
        alert(`You ordered ${userResponse} units.`);
    }
});

// Function to change the main image when a carousel image is clicked
function changeImage(imageSrc) {
    const mainImage = document.getElementById("main-image");
    mainImage.style.opacity = 0; // Fade out
    setTimeout(() => {
        mainImage.src = imageSrc;
        mainImage.style.opacity = 1; // Fade in
    }, 300); // Match this duration with CSS transition
}

// Function to zoom the main image
function zoomImage() {
    const modal = document.getElementById("zoom-modal");
    const zoomedImage = document.getElementById("zoomed-image");
    zoomedImage.src = document.getElementById("main-image").src; // Set zoomed image source
    modal.style.display = "flex"; // Show modal
}

// Function to close the zoomed image
function closeZoom() {
    document.getElementById("zoom-modal").style.display = "none"; // Hide modal
}
