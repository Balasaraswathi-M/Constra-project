
$(document).ready(function () {
  const slider = $('.bxSlider').bxSlider({
      auto: true,
      pager: true, 
      controls: false,
      mode: 'fade', 
  });

  // Custom navigation controls
  $('#prevSlide').on('click', function () {
      slider.goToPrevSlide();
  });

  $('#nextSlide').on('click', function () {
      slider.goToNextSlide();
  });
});
  
   
 
       $(document).ready(function () {
        $('#search-toggle').on('click', function () {
          var searchBar = $('#search-bar'); 
          var icon = $(this).find('.icon'); 
      
          searchBar.toggleClass('show'); 
      
          if (searchBar.hasClass('show')) {
            icon.removeClass('fa-search').addClass('fa-xmark');
          } else {
      
            icon.removeClass('fa-xmark').addClass('fa-search'); 
            $('#search').val(''); 
          }
        });
      });
      function countUp(elementId, targetNumber, duration) {
        var element = document.getElementById(elementId);
        var currentNumber = 0;
        var increment = Math.ceil(targetNumber / (duration / 30));
      
        var counter = setInterval(() => {
          currentNumber += increment;
          if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            clearInterval(counter);
          }
          element.textContent = currentNumber;
        }, 30);
      }
      
      var observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            countUp("count1", 1789, 1500);
            countUp("count2", 647, 1500);
            countUp("count3", 4000, 1500);
            countUp("count4", 44, 1500);
      
            observer.disconnect();
          }
        });
      });
      var targetBlock = document.querySelector('.page3');
observer.observe(targetBlock);
// page5
document.addEventListener('DOMContentLoaded', function () {
  var filterButtons = document.querySelectorAll('.filter-btn');
  var filterItems = document.querySelectorAll('.filter-item');
  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      var filter = this.getAttribute('data-filter');
      filterButtons.forEach(btn => btn.classList.remove('btn-warning'));
      filterButtons.forEach(btn => btn.classList.add('btn-outline-warning'));
      this.classList.remove('btn-outline-warning');
      this.classList.add('btn-warning');
      filterItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('imageModal');
  const carousel = modal.querySelector('#imageCarousel');
  const carouselItems = carousel.querySelectorAll('.carousel-item');

  document.querySelectorAll('.overlay i').forEach((icon, index) => {
    icon.addEventListener('click', function () {
      // Reset active states
      carouselItems.forEach(item => item.classList.remove('active'));

      // Set the clicked item's carousel item to active
      carouselItems[index].classList.add('active');
    });
  });
});
// page6
$(function () {
  $('.slider').bxSlider({
    controls: false,
    slideWidth: 600,
  });
});
window.onscroll = function() {
  var button = document.getElementById("back-to-top");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.display = "block";  // Show button
  } else {
    button.style.display = "none";  // Hide button
  }
};

// Smooth scroll
document.getElementById("scrollToTopButton").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});
