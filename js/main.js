const toggleMenu = document.getElementById("toggle-menu");
const links = document.getElementById("links");

toggleMenu.addEventListener("click", () => {
  links.classList.toggle("show-links");
  toggleMenu.classList.toggle("change-border");
});

const protfolioNavigationLinks = document.querySelectorAll(".portfolio .container .navigation ul li");
const potfolioImages = document.querySelectorAll(".portfolio .container .content div img");

protfolioNavigationLinks.forEach((protfolioNavigationLink) => {
  protfolioNavigationLink.addEventListener("click", () => {
    protfolioNavigationLinks.forEach((protfolioNavigationLink) => {
      protfolioNavigationLink.classList.remove("active");
    });
    filterPotfolioImages(protfolioNavigationLink.dataset.name);
    protfolioNavigationLink.classList.add("active");
  });
});


function filterPotfolioImages(type) {
  potfolioImages.forEach((potfolioImage) => {
    if (type === "All") {
      potfolioImage.parentElement.style.display = "block";
    } else {
      if (potfolioImage.dataset.name !== type) {
        potfolioImage.parentElement.style.display = "none";
      } else {
        potfolioImage.parentElement.style.display = "block";
      }
    }
  });
}
