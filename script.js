window.onload=()=>{
const grid = document.querySelector('.grid');
const msnry = new Masonry(grid,{
    itemSelector: '.grid-item',
    gutter: 20,
    fitWidth:true,
})}

function toggleGradient() {
    const section1 = document.querySelector('.rel-section-photos');
    const section2 = document.querySelector('.rel-section-photos1');
    section1.classList.toggle('show');
    section2.classList.toggle('show');
  }

document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".search-icon");
    const searchInput = document.getElementById("searchInput");

    searchIcon.addEventListener("click", function () {
        searchInput.classList.toggle("active");
        searchInput.focus();
    });




    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].classList.remove("active");
        currentSlide = index;
        slides[currentSlide].classList.add("active");
    }
    const prevSlideButton = document.querySelector(".prev-slide");
    const nextSlideButton = document.querySelector(".next-slide");

    prevSlideButton.addEventListener("click", function () {
        const prevSlideIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevSlideIndex);
    });

    nextSlideButton.addEventListener("click", function () {
        const nextSlideIndex = (currentSlide + 1) % slides.length;
        showSlide(nextSlideIndex);
    });

const gridItems = document.querySelectorAll('.grid-item img');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.getElementById('close');

gridItems.forEach(item => {
  item.addEventListener('click', function() {
    const imgSrc = item.getAttribute('src');
    popupImg.setAttribute('src', imgSrc);
    
    popup.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', function() {
  popup.style.display = 'none';
});
});

