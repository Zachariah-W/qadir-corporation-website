document.addEventListener("DOMContentLoaded", function () {
    const navigationLinks = document.querySelectorAll(".navigation-item");
    navigationLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            navigationLinks.forEach(link => link.classList.remove("active-link"));
            this.classList.add("active-link");
            window.location.href = this.getAttribute("href");
        });
    });
    highlightActiveLink();
});

function highlightActiveLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navigationLinks = document.querySelectorAll(".navigation-item");
    navigationLinks.forEach(link => {
        const linkPage = link.getAttribute("href").split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add("active-link");
        }
    });
}