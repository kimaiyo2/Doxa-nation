$(document).ready(function () {
  // --- Initialize AOS (Animate on Scroll) ---
  AOS.init({
    duration: 800,
    once: true,
    offset: 50,
  });

  // --- 1. Navbar ---
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#mainNavbar').addClass('scrolled').removeClass('navbar-dark');
    } else {
      $('#mainNavbar').removeClass('scrolled').addClass('navbar-dark');
    }
  });

  $('.navbar-toggler').click(function () {
    $(this).toggleClass('open');
  });

  $('.navbar-nav a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 80,
        },
        800
      );
    }
    if ($('.navbar-toggler').is(':visible')) {
      $('.navbar-collapse').collapse('hide');
      $('.navbar-toggler').removeClass('open');
    }
  });

  // --- 2. Hero Section ---
  // Initialize Typed.js
  var typed = new Typed('#typed-hero', {
    strings: [
      'Raising A Generation Of Glory.',
      'Worship, Growth And Purpose.',
      'Young Hearts Burning For God.',
      'A Nation Of Worshipers, A Generation Of Leaders.',
      'Glory To God, Growth To Man.',
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
  });

  // --- 4. Services Section ---
  // Initialize Vanilla-Tilt.js
  VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
    max: 15,
    speed: 400,
    glare: true,
    'max-glare': 0.5,
  });

  // --- 5. Statistics / Counter ---
  function animateCounter(element) {
    var $this = $(element);
    var countTo = $this.attr('data-count');
    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 2000,
        easing: 'swing',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          let finalVal = this.countNum
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          $this.text(finalVal);
        },
      }
    );
  }

  var statsSection = $('#stats');
  if (statsSection.length) {
    statsSection.waypoint(
      function (direction) {
        if (direction === 'down') {
          $('.counter').each(function () {
            $(this).attr('data-count', $(this).text().replace(/,/g, ''));
            $(this).text('0');
            animateCounter(this);
          });
          this.destroy();
        }
      },
      {
        offset: '75%',
      }
    );
  }

  // --- 7. Gallery / Media ---
  const lightbox = GLightbox({ selector: '.glightbox' });

  // --- 9. Testimonials ---
  var swiper = new Swiper('.testimonials-slider', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });

  // --- Contact Form ---
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    // A more modern feedback approach
    const btn = $(this).find('button[type="submit"]');
    btn.text('Sending...').prop('disabled', true);
    setTimeout(() => {
      btn.text('Message Sent!').css('background', '#28a745');
      setTimeout(() => {
        this.reset();
        btn.text('Send Message').prop('disabled', false).css('background', '');
      }, 2000);
    }, 1000);
  });

  // --- Scroll to Top Button ---
  var scrollTopBtn = $('#scrollTopBtn');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      scrollTopBtn.fadeIn();
    } else {
      scrollTopBtn.fadeOut();
    }
  });

  scrollTopBtn.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });
});

// video sound
