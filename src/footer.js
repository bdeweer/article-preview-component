const shareBtn = document.querySelector(".share");
const mobileFooter = document.querySelector(".active-mobile");
const footer = document.querySelector(".main-footer");
const isTablet = window.matchMedia("(min-width: 768px)");

shareBtn.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    mobileFooter.classList.toggle("active");
    footer.classList.toggle("active");
  }
});

const undoBtn = document.querySelector(".undo");

undoBtn.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    mobileFooter.classList.toggle("active");
    footer.classList.toggle("active");
  }
});

isTablet.addEventListener("change", (e) => {
  if (e.matches) {
    if (mobileFooter.classList.contains("active")) {
      mobileFooter.classList.toggle("active");
      footer.classList.toggle("active");
    }
  }
});
