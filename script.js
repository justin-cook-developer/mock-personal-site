const header = document.querySelector("header");
const { height: headerHeightStr } = getComputedStyle(header);
const decimalIdx = headerHeightStr.indexOf(".");
const headerHeight = parseInt(
  decimalIdx > -1 
   ? headerHeightStr.slice(0, decimalIdx)
   : headerHeightStr,
  10
);

const navListUl = document.getElementById("nav-list");
const navLinks = Array.from(
  navListUl.getElementsByClassName("link")
);
const hamburger = navListUl.querySelector(".hamburger");

const authModal = document.querySelector(".auth-modal");
const closeAuthModal = authModal.querySelector(".auth-modal-close");

const hero = document.getElementById("hero");

navListUl.addEventListener("click", ({ target }) => {
  const isLink = target.classList.contains("link");
  const isInactive = !target.classList.contains("active-link");

  if (isLink && isInactive) {
    navLinks.forEach(navLink => {
      navLink.classList.remove("active-link");
    });

    target.classList.add("active-link");
  }
});

hamburger.addEventListener("click", () => {
  authModal.classList.add("auth-modal-show");
});

closeAuthModal.addEventListener("click", () => {
  hamburger.style.color = "black";
  authModal.classList.remove("auth-modal-show");
});

// should debounce for performance
document.addEventListener("scroll", () => {
  const rect = hero.getBoundingClientRect();
  const headerBackgroundColor = header.style.backgroundColor;

  if (rect.bottom <= headerHeight && headerBackgroundColor === "") {
    header.style.backgroundColor = "rgb(224, 218, 230)";
  } else if (rect.bottom > headerHeight && headerBackgroundColor !== "") {
    header.style.backgroundColor = "";
  }
});
