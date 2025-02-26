let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll < lastScrollTop) {
        // Scrolling up → Shrink header
        header.style.height = "0";
        header.style.margin = "auto";
        header.style.overflow = "hidden";
        header.style.padding = "0";
    } else {
        // Scrolling down → Restore header
        header.style.height = "100vh";
        header.style.margin = "0";
        header.style.padding = "10px 0";
    }

    lastScrollTop = currentScroll;
});