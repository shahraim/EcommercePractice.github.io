let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

const navLinks = document.querySelectorAll("header nav a");
const sections = document.querySelectorAll("section");

window.onscroll = () => {
  function highlightLink() {
    let index = sections.length;

    while (--index && window.scrollY + 150 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
  }

  highlightLink();

  window.addEventListener("scroll", highlightLink);
};

// for search bar
document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};
document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
};

// for cart
document.querySelector("#cart-icon").onclick = () => {
  document.querySelector("#cartformparent").classList.toggle("active1");
};
// document.getElementById("close1").onclick = () => {
//   console.log("what")
//   document.querySelector("#cartformparent").classList.remove("active1");
// };
function finalclose() {
  // console.log("what");
  document.querySelector("#cartformparent").classList.remove("active1");
}
// for slider

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

// review slider

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}
function fadeOut() {
  setInterval(loader, 100);
}
window.onload = fadeOut;
