document.addEventListener('DOMContentLoaded', function () {
    const sideMenu = document.getElementById('side-menu');
    const hamburger = document.getElementById('hamburger');

    hamburger.addEventListener('click', function () {
        sideMenu.classList.toggle('active');
    });
});
