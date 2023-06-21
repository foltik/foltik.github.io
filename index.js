document.addEventListener('DOMContentLoaded', () => {
    // Start showcase animations from the beginning when hovering
    document.querySelectorAll('.anim').forEach(img => 
        img.addEventListener('mouseenter', () => img.src = img.src));
});
