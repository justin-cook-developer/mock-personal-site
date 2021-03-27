const header = document.querySelector("header");
const { height: headerHeightStr } = getComputedStyle(header);
const headerHeight = parseInt(
  headerHeightStr.slice(0, headerHeightStr.length - 2),
  10
);

const navListUl = document.getElementById("nav-list");
const navLinks = Array.from(
  navListUl.getElementsByClassName("link")
);

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
