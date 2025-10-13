document.addEventListener("DOMContentLoaded", function() {
  const menuBtn = document.querySelector(".menu-btn");
  const menuList = document.querySelector(".menu-list");

  function closeMenuMobile() {
    menuList.classList.remove("mobile-open");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  if (menuBtn && menuList) {
    menuBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      const expanded = menuBtn.getAttribute("aria-expanded") === "true";
      if (!expanded) {
        menuList.classList.add("mobile-open");
        menuBtn.setAttribute("aria-expanded", "true");
      } else {
        closeMenuMobile();
      }
    });

    document.addEventListener("click", function(e) {
      if (
        menuList.classList.contains("mobile-open") &&
        !menuList.contains(e.target) &&
        !menuBtn.contains(e.target) &&
        window.innerWidth <= 960
      ) {
        closeMenuMobile();
      }
    });

    window.addEventListener("resize", function() {
      if (window.innerWidth > 960) {
        menuList.classList.remove("mobile-open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }
});
