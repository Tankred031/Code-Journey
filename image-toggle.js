const projectsContainer = document.querySelector(".projects-list");

if (projectsContainer) {
    projectsContainer.addEventListener("click", function (event) {
        const clickedImage = event.target.closest(
            ".project-images.multiple-images .project-image"
        );

        if (!clickedImage) {
            return;
        }

        if (clickedImage.classList.contains("is-front")) {
            return;
        }

        const imageContainer = clickedImage.closest(
            ".project-images.multiple-images"
        );

        const allImages = imageContainer.querySelectorAll(
            ".project-image"
        );

        allImages.forEach(function (image) {
            image.classList.remove("is-front");
        });

        clickedImage.classList.add("is-front");
    });
}