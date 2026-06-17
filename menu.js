const menuButtons = document.querySelectorAll(".menu-btn");
const pageViews = document.querySelectorAll(".page-view");

menuButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedPage = button.dataset.page;

        menuButtons.forEach(function (menuButton) {
            menuButton.classList.remove("active-menu");
        });

        pageViews.forEach(function (page) {
            page.classList.remove("active-page");
        });

        button.classList.add("active-menu");

        const pageToShow = document.getElementById(selectedPage);

        if (pageToShow) {
            pageToShow.classList.add("active-page");
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});