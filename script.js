// -------- Logo Animation on Page Load --------
window.addEventListener("load", () => {
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.style.opacity = "0";
    logo.style.transform = "scale(0.5) rotate(-30deg)";

    setTimeout(() => {
      logo.style.transition = "all 1s ease";
      logo.style.opacity = "1";
      logo.style.transform = "scale(1) rotate(0deg)";
    }, 300);
  }
});

// -------- Smooth Scroll for Navbar --------
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = this.getAttribute("href");
    document.querySelector(target).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// -------- Contact Form Submit --------
function showThankYou(event) {
  event.preventDefault(); // stop page reload

  // hide contact section
  document.getElementById("contact").style.display = "none";

  // show thank you section
  const thankyou = document.getElementById("thankyou");
  thankyou.style.display = "flex";

  // auto-hide thank you after 5s and bring back contact
  setTimeout(() => {
    thankyou.style.display = "none";
    document.getElementById("contact").style.display = "block";
  }, 5000);
}
