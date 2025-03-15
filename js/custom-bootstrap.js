/* Custom JS Framework - Bootstrap JS Alternative */

// ========== DROPDOWN FUNCTIONALITY ========== //
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-toggle='dropdown']").forEach(function (dropdownToggle) {
        dropdownToggle.addEventListener("click", function (event) {
            event.preventDefault();
            let dropdownMenu = this.nextElementSibling;
            if (dropdownMenu && dropdownMenu.classList.contains("dropdown-menu")) {
                dropdownMenu.classList.toggle("show");
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        document.querySelectorAll(".dropdown-menu.show").forEach(function (menu) {
            if (!menu.previousElementSibling.contains(event.target)) {
                menu.classList.remove("show");
            }
        });
    });
});

// ========== MODAL FUNCTIONALITY ========== //
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-toggle='modal']").forEach(function (modalTrigger) {
        modalTrigger.addEventListener("click", function () {
            let targetModal = document.querySelector(this.getAttribute("data-target"));
            if (targetModal) {
                targetModal.classList.add("show");
                document.body.classList.add("modal-open");
            }
        });
    });

    document.querySelectorAll("[data-dismiss='modal']").forEach(function (modalClose) {
        modalClose.addEventListener("click", function () {
            let targetModal = this.closest(".modal");
            if (targetModal) {
                targetModal.classList.remove("show");
                document.body.classList.remove("modal-open");
            }
        });
    });

    // Close modal on outside click
    document.addEventListener("click", function (event) {
        document.querySelectorAll(".modal.show").forEach(function (modal) {
            if (event.target === modal) {
                modal.classList.remove("show");
                document.body.classList.remove("modal-open");
            }
        });
    });
});

// ========== COLLAPSE FUNCTIONALITY ========== //
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-toggle='collapse']").forEach(function (collapseTrigger) {
        collapseTrigger.addEventListener("click", function () {
            let targetCollapse = document.querySelector(this.getAttribute("data-target"));
            if (targetCollapse) {
                targetCollapse.classList.toggle("show");
            }
        });
    });
});

// ========== CAROUSEL FUNCTIONALITY ========== //
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".carousel").forEach(function (carousel) {
        let slides = carousel.querySelectorAll(".carousel-item");
        let currentIndex = 0;
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === index);
            });
        }
        carousel.querySelector(".carousel-control-next").addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        });
        carousel.querySelector(".carousel-control-prev").addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        });
    });
});
