'use strict';

document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('body').addEventListener('click', e => {
    if (e.target.closest('.header-menu__link_dropdown')) {
      e.preventDefault();
      e.target.closest('.header-menu__link_dropdown').parentNode.querySelector('.header-menu__dropdown').classList.toggle('show');
      e.target.closest('.header-menu__link_dropdown').classList.toggle('active')
    }
    if (!e.target.closest('.header-menu__link_dropdown') && !e.target.closest('.header-menu__dropdown')) {
      document.querySelector('.header-menu__link_dropdown').classList.remove('active');
      document.querySelector('.header-menu__dropdown').classList.remove('show');
    }
    if (e.target.closest('.catalog-button')) {
      e.target.closest('.catalog-button').classList.toggle('active');
      document.querySelector('body').classList.toggle('hidd')
      document.querySelector('.header').classList.toggle('active');
      document.querySelector('.catalog-content').classList.toggle('show');

      if (document.querySelector('.catalog-content').classList.contains('show')) {
        const collLinks = document.querySelectorAll('.catalog-menu__link');
        collLinks.forEach((element, index) => {
          if (index === 0) {
            element.classList.add('active')
            if (element.parentNode.querySelector('.catalog-menu__submenu')) {
              element.parentNode.querySelector('.catalog-menu__submenu').classList.add('show');
              // element.parentNode.querySelector('.catalog-menu__submenu').classList.add('mobile-show');
            }
          } else {
            element.classList.remove('active')
            element.classList.remove('mobile-active')
            if (element.parentNode.querySelector('.catalog-menu__submenu')) {
              element.parentNode.querySelector('.catalog-menu__submenu').classList.remove('show');
              element.parentNode.querySelector('.catalog-menu__submenu').classList.remove('mobile-show');
            }
          }
        });

        const collBlcoks = document.querySelectorAll('.catalog-menu__dropmenu');
        collBlcoks.forEach((element, index) => {
          if (index === 0) {
            element.classList.add('show')
            const blocks = element.querySelectorAll('.list-menu__link');
            blocks.forEach((el, index) => {
              if (index === 1) {
                el.classList.add('active')
              } else {
                el.classList.remove('active')
                el.classList.remove('mobile-active')
              }
            }); 
          } else {
            element.classList.remove('show')
            element.classList.remove('mobile-show')
          }
        });
      } else {
        document.querySelectorAll('.catalog-menu__dropmenu').forEach(element => {
          element.classList.remove('show');
          element.classList.remove('mobile-show');
        });
  
        document.querySelectorAll('.catalog-menu__submenu').forEach(element => {
          element.classList.remove('show');
          element.classList.remove('mobile-show');
        });

        document.querySelectorAll('.catalog-menu__link').forEach(element => {
          element.classList.remove('mobile-active');
        });
        // const collLinks = document.querySelectorAll('.catalog-menu__link');
        // collLinks.forEach((element) => {
        //   element.classList.remove('active')
        //   element.classList.remove('mobile-active')
        //   if (element.parentNode.querySelector('.catalog-menu__submenu')) {
        //     element.parentNode.querySelector('.catalog-menu__submenu').classList.remove('show');
        //     element.parentNode.querySelector('.catalog-menu__submenu').classList.remove('mobile-show');
        //   }
        // });
        // const collBlcoks = document.querySelectorAll('.catalog-menu__dropmenu');
        // collBlcoks.forEach((element) => {
        //   element.classList.remove('show')
        //   element.classList.remove('mobile-show')
        //   const blocks = element.querySelectorAll('.list-menu__link');
        //   blocks.forEach((el) => {
        //     el.classList.remove('active')
        //     el.classList.remove('mobile-active')
        //   }); 
        // });
      }

    }
    if (!e.target.closest('.catalog-button') && !e.target.closest('.catalog-content')) {
      document.querySelector('.catalog-button').classList.remove('active');
      document.querySelector('body').classList.remove('hidd')
      document.querySelector('.header').classList.remove('active');
      document.querySelector('.catalog-content').classList.remove('show');

      document.querySelectorAll('.catalog-menu__dropmenu').forEach(element => {
        element.classList.remove('show');
        element.classList.remove('mobile-show');
      })

      document.querySelectorAll('.catalog-menu__submenu').forEach(element => {
        element.classList.remove('show');
        element.classList.remove('mobile-show');
      })

    };

    if (e.target.closest('.catalog-menu__link')) {
      e.preventDefault();

      document.querySelectorAll('.catalog-menu__link').forEach(element => {
        element.classList.remove('active');
        element.classList.remove('mobile-active');
      });

      document.querySelectorAll('.catalog-menu__dropmenu').forEach(element => {
        element.classList.remove('show');
        element.classList.remove('mobile-show');
      });

      e.target.closest('.catalog-menu__link').classList.add('active');
      e.target.closest('.catalog-menu__link').classList.add('mobile-active');
      e.target.closest('.catalog-menu__link').parentNode.querySelector('.catalog-menu__dropmenu').classList.add('show');
      e.target.closest('.catalog-menu__link').parentNode.querySelector('.catalog-menu__dropmenu').classList.add('mobile-show');
    
      const blocks = e.target.closest('.catalog-menu__item').querySelectorAll('.list-menu__item');
      blocks.forEach((el, index) => {
        
        if (index === 1) {
          if (el.querySelector('.catalog-menu__submenu')) {
            el.querySelector('.catalog-menu__submenu').classList.add('show');
            // el.querySelector('.catalog-menu__submenu').classList.add('mobile-show');
          };
        } else {
          if (el.querySelector('.catalog-menu__submenu')) {
            el.querySelector('.catalog-menu__submenu').classList.remove('show');
            el.querySelector('.catalog-menu__submenu').classList.remove('mobile-show');
          };
        }
      }); 

      if (window.innerWidth < 992) {
        document.querySelectorAll('.catalog-menu__submenu').forEach(element => element.classList.remove('mobile-show'));
      }
    }

    if (e.target.closest('.list-menu__link')) {
      e.preventDefault();
      const collLinks = e.target.closest('.list-menu__item').parentNode.querySelectorAll('.list-menu__link');
      collLinks.forEach(element => {
        element.classList.remove('active')
        element.classList.remove('mobile-active')
      });
      e.target.closest('.list-menu__link').classList.add('active')
      e.target.closest('.list-menu__link').classList.add('mobile-active');

      const collBlcoks =  document.querySelectorAll('.catalog-menu__submenu');
      collBlcoks.forEach(element => {
        element.classList.remove('show');
        element.classList.remove('mobile-show');
      });

      e.target.closest('.list-menu__item').querySelector('.catalog-menu__submenu').classList.add('show');
      e.target.closest('.list-menu__item').querySelector('.catalog-menu__submenu').classList.add('mobile-show');
    }
    if (e.target.closest('.catalog-menu__submenu__back')) {
      document.querySelectorAll('.catalog-menu__submenu').forEach(element => element.classList.remove('mobile-show'));
    }
    if (e.target.closest('.catalog-menu__dropmenu_title')) {
      if (window.innerWidth < 992) {
        document.querySelectorAll('.catalog-menu__dropmenu').forEach(element => element.classList.remove('mobile-show'));
      }
    }
    if (e.target.closest('.mobile-search')) {
      e.target.closest('.mobile-search').classList.toggle('active');
      document.querySelector('.mobile-search__content').classList.toggle('show');
    }
    if (e.target.closest('.mobile-search__clear')) {
      document.querySelector('#mobileSearch').value = '';
      document.querySelector('.mobile-search__clear').classList.remove('active');
    }
    if (!e.target.closest('.mobile-search') && !e.target.closest('.mobile-search__content')) {
      document.querySelector('.mobile-search').classList.remove('active');
      document.querySelector('.mobile-search__content').classList.remove('show');
    }
  });

  document.querySelector('#mobileSearch').addEventListener('input', e => {
    if (e.target.value === '') {
      document.querySelector('.mobile-search__clear').classList.remove('active');
    } else {
      document.querySelector('.mobile-search__clear').classList.add('active');
    }
  });

  if (document.querySelector('.main-catalog__slider')) {
    let swiperCatalog;
  
    const addSlider = () => {
      swiperCatalog = new Swiper('.main-catalog__slider', {
        loop: false,
        spaceBetween: 20,
        slidesPerView: 'auto',
        speed: 800,
        pagination: {
          el: ".catalog-slider-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".main-next",
          prevEl: ".main-prev",
        },
        breakpoints: {
          1200: {
            slidesPerView: 4,
          }
        }
      });
    };
  
    const destroySlider = () => {
      addSlider();
      swiperCatalog.destroy();
    };
  
    const toggleSlider = () => {
      if (window.innerWidth > 767) {
        addSlider();
      } else {
        destroySlider();
      }
    };
  
    toggleSlider();
  
    window.addEventListener('resize', () => {
      toggleSlider();
    });
  }
  
	const swipernovelty= new Swiper(".main-novelty__slider", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    speed: 800,
    pagination: {
      el: ".novelty-pagination",
      type: "progressbar",
    },
  });

  const getWidthBlock = () => {
    const coordsLeft = document.querySelector('.main-novelty h2').getBoundingClientRect().left;
    document.querySelector('.main-novelty__block').style.marginLeft = `${coordsLeft}px`; 
  }

  const getWidthBlockBrand = () => {
    const coordsLeft = document.querySelector('.main-brands h2').getBoundingClientRect().left;
    document.querySelector('.main-brands__block').style.marginLeft = `${coordsLeft}px`; 
  }

  const getWidthBlockServices = () => {
    const coordsLeft = document.querySelector('.main-services h2').getBoundingClientRect().left;
    document.querySelector('.main-services__block').style.marginLeft = `${coordsLeft}px`; 
  }

 
  if (document.querySelector('.main-novelty__block') ) {
    getWidthBlock();
    window.addEventListener('resize', () => {
      getWidthBlock();
    });
  }

  if (document.querySelector('.main-brands__block') ) {
    getWidthBlockBrand();
    window.addEventListener('resize', () => {
      getWidthBlockBrand();
    });
  }

  if (document.querySelector('.main-services__block ') ) {
    getWidthBlockServices();
    window.addEventListener('resize', () => {
      getWidthBlockServices();
    });
  }

	const swiperbrands= new Swiper(".main-brands__slider", {
    loop: true,
    spaceBetween: 40,
    slidesPerView: 'auto',
    speed: 800,
    pagination: {
      el: ".brands-pagination",
      type: "progressbar",
    },
  });

  if (document.querySelector('.main-popular__slider')) {
    let swiperpopular;
  
    const addSlider = () => {
      swiperpopular = new Swiper('.main-popular__slider', {
        loop: false,
        spaceBetween: 20,
        slidesPerView: 'auto',
        speed: 800,
        pagination: {
          el: ".popular-pagination",
          type: "progressbar",
        }
      });
    };
  
    const destroySlider = () => {
      addSlider();
      swiperpopular.destroy();
    };
  
    const toggleSlider = () => {
      if (window.innerWidth < 1200) {
        addSlider();
      } else {
        destroySlider();
      }
    };
  
    toggleSlider();
  
    window.addEventListener('resize', () => {
      toggleSlider();
    });
  }
  
	const swiperservices = new Swiper(".main-services__slider", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    speed: 800,
    pagination: {
      el: ".services-pagination",
      type: "progressbar",
    },
  });

  jQuery(function($){
    $(".phone").mask("+7 (999) 999 - 99 - 99");
  });

  const swiperblog = new Swiper('.main-blog__slider', {
    loop: false,
    spaceBetween: 20,
    slidesPerView: 'auto',
    speed: 800,
    pagination: {
      el: ".blog-pagination",
      type: "progressbar",
    },
    breakpoints: {
      960: {
        slidesPerView: 3,
      }
    }
  });

  const swipercertificates = new Swiper('.main-certificates__slider', {
    loop: false,
    spaceBetween: 20,
    slidesPerView: 'auto',
    speed: 800,
    pagination: {
      el: ".certificates-pagination",
      type: "progressbar",
    },
    breakpoints: {
      992: {
        slidesPerView: 4,
      }
    }
  });

  








   
  setTimeout(function() {
    $('select').styler();
  }, 100)

  const swiper2 = new Swiper(".portfolio-slider", {
    allowTouchMove: true,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    speed: 800,
    navigation: {
      nextEl: ".portfolio-next",
      prevEl: ".portfolio-prev",
    },
    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 2,
        }
    }
  });

  $('.sidebar-button').click(function (e) {
    // $(this).toggleClass('active'); 
    $('.sidebar').slideToggle(); 
  });
  

});
