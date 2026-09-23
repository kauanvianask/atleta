const footer = document.querySelector("footer");

if (footer) {
    const currentYear = new Date().getFullYear();

    footer.innerHTML = footer.innerHTML.replace(
        "2026",
        currentYear
    );
}

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });
});

const sections = document.querySelectorAll("section[id]");
const menuLinks = document.querySelectorAll(".header nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    menuLinks.forEach(link => {

        link.classList.remove("active");

        const linkTarget = link.getAttribute("href");

        if (linkTarget === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});

const animatedElements = document.querySelectorAll(
    ".club, .dvd-card, .stat"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach(element => {
    observer.observe(element);
});