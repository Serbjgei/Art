// swiper partners
var swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    direction: getDirection(),
    navigation: {
      nextEl: '.partners-panel__next',
      prevEl: '.partners-panel__prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }
// swiper news
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    freeMode: true,
    grabCursor: true,
  });

  class PhotoGallery {
    constructor(container, bigPhotoClass, smallPhotosClass) {
        this.container = container;
        this.bigPhoto = container.querySelector(`.${bigPhotoClass}`);
        this.smallPhotos = container.querySelectorAll(`.${smallPhotosClass}`);

        this.addClickHandlers();
        this.setInitialActive();
    }

    addClickHandlers() {
        this.smallPhotos.forEach(smallPhoto => {
            smallPhoto.addEventListener('click', () => {
                this.smallPhotos.forEach(photo => {
                    photo.classList.remove('active');
                });

                smallPhoto.classList.add('active');

                const smallPhotoSrc = smallPhoto.querySelector('img').src;
                this.bigPhoto.src = smallPhotoSrc;
            });
        });
    }

    setInitialActive() {
        // Логика для установки начального активного состояния, если требуется
    }
}

// Найти все контейнеры галерей
const galleryContainers = document.querySelectorAll('.objects-card');

// Создать объекты PhotoGallery для каждой галереи
galleryContainers.forEach(container => {
    const gallery = new PhotoGallery(container, 'big-photo', 'objects-card-info-img__small-photo');
});



// map
ymaps.ready(function () {
    let latitude = parseFloat(document.getElementById('map').getAttribute('data-latitude'));
    let longitude = parseFloat(document.getElementById('map').getAttribute('data-longitude'));

    let center = [latitude, longitude];
    
  
    let map = new ymaps.Map("map", {
      center: center, // Координаты центра карты
      zoom: 14, // Масштаб карты
    //    controls: [] // Виджеты карты
    });
  
    map.behaviors.disable('scrollZoom');
  
    let placemark = new ymaps.Placemark(center, {}, {
      iconLayout: "default#image",
      iconImageHref: "assets/img/icon/geo.svg", // Путь к файлу логотипа
      iconImageSize: [60, 60], // Размеры иконки
      iconImageOffset: [-30, -60] // Смещение иконки
    });
  
    map.geoObjects.add(placemark); // Добавляем метку на карту
  });

 

// jQuery function
$(document).ready(function() {

    //headerBurger
    function headerBurger() {
        $('.header-burger').click(function() {
            $('header').addClass('open');
            $('html').addClass('hidden');
        })
        $('.header-close').click(function() {
            $('.header').removeClass('open');
            $('html').removeClass('hidden');
        })
    }
    headerBurger();
    $(document).click(function (e) {
        let container = $(".no-hover");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('html').removeClass('hidden');
            $('.header').removeClass('open');
        }
    });

    function closeModal() {
        $('.popup__close').click(function() {
            $('html').removeClass('hidden');
            $('.duty').removeClass('open');
        });
        $(document).mouseup(function (e) {
            var container = $(".popup-wrapper");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('html').removeClass('hidden');
                $(".popup").removeClass("open");
            }
        });
    }
    closeModal();

        // OpenModal  
    function openModal() { 
        $('.modal-contact').click(function (e) {
            e.preventDefault();
            $('.popup-contact').addClass('open');
            $('html').addClass('hidden');
        });
    }
    openModal();
    
    //табы для направлений
    function tabsAll() {
        $('.tabs-btn').click(function() {
            let id = $(this).attr('data-tab'), 
            content = $(this).parent().parent().parent().find('.tabs-block[data-tab="'+ id +'"]');
            $(this).parent().parent().find('.tabs-btn').removeClass('active');
            $(this).addClass('active');
            $(this).parent().parent().parent().find('.tabs-block').removeClass('show');
            content.addClass('show');
        });
    };
    tabsAll();

    function galleryList() {
        $('.galleryMain-block-two').each(function() {
            $(this).find('.gallery-item').each(function() {
                if($(this).find('.gallery-item-category-item').length == 0) {
                    $(this).css('display', 'none')
                }
                console.log($(this).find('.gallery-item-category-item'))
            })
        })
    }
    galleryList()
    
    function scrollHeader() {
        let scrollBtn = $(".header");
        let previousScroll = 0,
        navBarOrgOffset = $(".header").offset().top;

        if($(window).width() <= 992) {
            $(".header-height").height($(".header").height() + $(".header").innerHeight() - $('.header').height());
    
            $(window).scroll(function () {
                if ($(window).scrollTop() > 100) {
                    scrollBtn.addClass("scroll");
                } else {
                    scrollBtn.removeClass("scroll");
                }
                let currentScroll = $(this).scrollTop();
                if (currentScroll > navBarOrgOffset) {
                  if (currentScroll > previousScroll) {
                      scrollBtn.addClass("scroll");
                  } else {
                      scrollBtn.removeClass("scroll");
                  }
                } else {
                  scrollBtn.removeClass("scroll");
                }
                previousScroll = currentScroll;
            });

        } else {
            $(".header-height").height(0);
        }
    };
    scrollHeader()

    function adaptiveFunc() {
        function newsBanner() {
            if($('.news-banner').length) {
                if($(window).width() <= 1210) {
                    if($('.news-item-banner').length) {
                        $('.news-list').find('.news-item').last().append($('.news-banner'));
                    } else {
                        $('.news-list').append('<li class="news-item news-item-banner"></li>');
                        $('.news-list').find('.news-item').last().append($('.news-banner'));
                    }
                } else {
                    $('.news-block').append($('.news-banner'))
                    $('.news-item-banner').remove();
                }
            }
        }
        //adaptiveNews
        newsBanner();
        $(window).resize(function () {
            newsBanner();
            scrollHeader();
        })
    }
    adaptiveFunc();

    // Кастомный селект
    function selectCustom() {
        $('.select-title').click(function () {
            $(this).parent().toggleClass('active');
        });
        $(document).mouseup(function (e) {
            let container = $(".select");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.select').removeClass('active');
            }
        }); 
        $('.select-item').click(function() {
            $(this).parent().parent().parent().find('.select-title p').text($(this).find('p').text());
            $(this).parent().parent().parent().find('.select-title input').val($(this).find('p').text());
            $(this).parent().parent().find('.select-item').removeClass('active');
            $(this).addClass('active');
            $('.select').removeClass('active');
        });
    }
    selectCustom();
    
    function formValidate() {
        $('#accreditation-form').validate({
            rules: {
                fio: {
                    required: true,
                    minlength: 2
                },
                post: {
                    required: true,
                    minlength: 3
                },
                phone: {
                    required: true,
                    minlength: 4
                },
                nameSNN: {
                    required: true,
                    minlength: 1
                },
                email: {
                    required: true,
                    minlength: 4,
                    email: true
                },
                typeCNN: {
                    required: true,
                    minlength: 1
                },
                comment: {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                fio: {
                    required: "Поле не заполнено",
                    minlength: "Минимальное количество символов: 2"
                },
                post: {
                    required: "Поле не заполнено",
                    minlength: "Минимальное количество символов: 3"
                },
                phone: {
                    required: "Поле не заполнено",
                    minlength: "Минимальное количество символов: 4"
                },
                nameSNN: {
                    required: "Поле не заполнено",
                    minlength: "Минимальное количество символов: 1"
                },
                email: {
                    required: "Поле не заполнено",
                    minlength: "Минимальное количество символов: 4"
                },
                typeCNN: {
                    required: "Поле не заполнено",
                    minlength: "Минимальное количество символов: 1"
                },
                comment: {
                    required: "Поле не заполнено",
                    minlength: "Минимальное количество символов: 5"
                }
            }
        });
        $('#subscribe-form').validate({
            rules: {
                email: {
                    required: true,
                    minlength: 2,
                    email: true
                }
            },
            messages: {
                email: {
                    required: "Поле не заполнено",
                    minlength: "Минимальное количество символов: 4"
                }
            },
            errorPlacement: function(error, element) {
                error.appendTo( element.parent().parent().next(".subscribe-form__err") );
                
            }
        });
    };
    formValidate(); 
    
});
