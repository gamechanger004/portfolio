// preloader
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      document.querySelector("body").classList.add("loaded");
  }, 50)
});
// preloader ends

// test
if(!document.getElementById("contactPage")) {
  // if this is contact page, do not fire this scripts. Because I don't have slider on contact page
  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function openResume() {
  // Replace 'path/to/your/resume.doc' with the actual path to your resume document
  var resumePath = 'C:\Users\sohai_j71apg\OneDrive\Desktop\computerscienceportfolio-master\resume.pdf';
  
  // Open the resume document in a new window or tab
  window.open(resumePath, '_blank');
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
}
document.addEventListener("DOMContentLoaded", function() {
    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust the offset as needed
            behavior: 'smooth'
          });
        }
      });
    });
  });

