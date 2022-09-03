const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

var lastScrollTop; // This Varibale will store the top position

navbar = document.getElementById("navbar"); // Get The NavBar

window.addEventListener("scroll", function () {
  //on every scroll this funtion will be called

  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //This line will get the location on scroll

  if (scrollTop > lastScrollTop) {
    //if it will be greater than the previous
    navbar.style.top = "-350px";
    //set the value to the negetive of height of navbar
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop; //New Position Stored
});
// Smooth Scroll
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".sideNav div ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

$(window).on("touchstart", function (e) {
  startY = e.originalEvent.changedTouches[0].pageY;
});

if (useEventListener) {
  window.addEventListener(
    "touchmove",
    function (e) {
      var currentY = e.changedTouches[0].pageY;
      if ($(window).scrollTop() <= 0 && startY <= currentY) {
        e.preventDefault();
        return false;
      }
    },
    { passive: false }
  );
}
