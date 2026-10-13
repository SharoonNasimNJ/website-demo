// Set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Log a message to confirm the script loaded
console.log('✅ Website loaded successfully!');

// Add a subtle animation to the header on load
window.addEventListener('load', () => {
    const header = document.querySelector('header');
    header.style.opacity = '0';
    header.style.transition = 'opacity 1s';
    setTimeout(() => {
        header.style.opacity = '1';
    }, 100);
});