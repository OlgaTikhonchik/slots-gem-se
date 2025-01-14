document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".sidebar__links-button");
    const list = document.querySelector(".sidebar__links-list");
  
    button.addEventListener("click", function () {
      const isActive = list.classList.contains("active");
      list.classList.toggle("active", !isActive);
      button.classList.toggle("active", !isActive);
    });
  });
  
// page-nav

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".page-nav-desk");
    const list = document.querySelector(".page-nav-list");
  
    button.addEventListener("click", function () {
      const isActive = list.classList.contains("active");
      list.classList.toggle("active", !isActive);
      button.classList.toggle("active", !isActive);
    });
  });
  