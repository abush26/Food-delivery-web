document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".navbar .left .logo");
  const locationDiv = document.querySelector(".navbar .location-div");
  const locationDropdown = document.querySelector(".location-div .other");
  const filters = document.querySelectorAll(".item-bar .filters div");
  const placeLinks = document.querySelectorAll(".restaurant-list .place-link");
  const viewButtons = document.querySelectorAll(".quick-view .view-btn");
  const navLinks = document.querySelectorAll(".navbar .nav-item a");
  const scrollToTopButton = document.getElementById("scrollToTopButton");

  function handleLogoClick(event) {
      event.target.style.color = "red";
  }

  function handleLocationDropdown(event) {
      locationDropdown.classList.toggle("active");
  }

  function handleFilterCategory(event) {
      const category = event.target.dataset.category;
      const restaurantItems = document.querySelectorAll(".restaurant-list .list-item");

      restaurantItems.forEach(item => {
          if (category === "all" || item.dataset.category === category) {
              item.style.display = "block";
          } else {
              item.style.display = "none";
          }
      });
  }

  function handlePlaceLinkOver() {
      const quickView = this.querySelector(".quick-view");
      quickView.style.visibility = "visible";
  }

  function handlePlaceLinkOut() {
      const quickView = this.querySelector(".quick-view");
      quickView.style.visibility = "hidden";
  }

  function handleViewButtonClick(event) {
      event.stopPropagation();
      alert("View button clicked!");
  }

  function handleNavLinkClick(event) {
      const targetId = event.target.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth"
          });
      }
  }

  function scrollToTopButtonClick() {
      window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleScroll() {
      if (window.pageYOffset > 1000) {
          scrollToTopButton.style.display = "block";
      } else {
          scrollToTopButton.style.display = "none";
      }
  }

  logo.addEventListener("click", handleLogoClick);
  locationDiv.addEventListener("click", handleLocationDropdown);
  filters.forEach(filter => filter.addEventListener("click", handleFilterCategory));
  placeLinks.forEach(placeLink => {
      placeLink.addEventListener("mouseover", handlePlaceLinkOver);
      placeLink.addEventListener("mouseout", handlePlaceLinkOut);
  });
  viewButtons.forEach(viewButton => viewButton.addEventListener("click", handleViewButtonClick));
  navLinks.forEach(navLink => navLink.addEventListener("click", handleNavLinkClick));
  scrollToTopButton.addEventListener("click", scrollToTopButtonClick);
  window.addEventListener("scroll", handleScroll);
});
