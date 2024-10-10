const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.thumbnail');

// Set initial active thumbnail
thumbnails[0].classList.add('active');

// Add click event to thumbnails
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', (e) => {
        // Remove active class from all thumbnails
        thumbnails.forEach(thumb => thumb.classList.remove('active'));

        // Add active class to clicked thumbnail
        thumbnail.classList.add('active');

        // Update the main image source
        const newSrc = thumbnail.getAttribute('src');
        mainImage.setAttribute('src', newSrc);
    });
});
