document.addEventListener('DOMContentLoaded', function () {
    const sideMenu = document.getElementById('side-menu');
    const hamburger = document.getElementById('hamburger');

    hamburger.addEventListener('click', function () {
        sideMenu.classList.toggle('active');
    });

    // Get the current page
    const currentPage = window.location.pathname.split('/').pop();
    const currentLink = document.querySelector(`.side-menu a[href="${currentPage}"]`);
    if (currentLink) {
        currentLink.classList.add('active');
    }
});
