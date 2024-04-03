document.getElementById('modeToggle').addEventListener('click', function() {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
        this.textContent = 'Mode Sombre';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        this.textContent = 'Mode Clair';
    }
});
