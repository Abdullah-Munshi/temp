const stickyTarget = document.querySelector(".sticky-target");
const stickyWrapper = document.querySelector("header");

const stickyWatch = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      stickyWrapper.classList.add("stuck");
    } else {
      stickyWrapper.classList.remove("stuck");
    }
  });
};
const observer = new IntersectionObserver(stickyWatch);
observer.observe(stickyTarget);

if (document.querySelector(".navbar-toggle") !== null) {
  const navbarToggle = document.querySelector(".navbar-toggle");
  navbarToggle.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("body").classList.toggle("extra");
  });
}
