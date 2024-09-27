const stars = document.querySelectorAll('.rating span');

stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
        stars.forEach((s, i) => {
            if (i <= index) {
                s.style.color = '#f39c12'; // Highlighted stars
            } else {
                s.style.color = '#ccc'; // Unhighlighted stars
            }
        });
    });

    star.addEventListener('mouseout', () => {
        stars.forEach((s) => {
            s.style.color = '#f39c12'; // Reset to the original rating color
        });
    });
});
