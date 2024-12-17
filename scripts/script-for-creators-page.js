fetch('translations.json')
  .then(response => response.json())
  .then(data => {
    i18next.init({
      lng: 'en', 
      debug: true,
      resources: data
    }, function (err, t) {
      if (err) return console.error(err);
      updateContent()
    });
  })
  .catch(err => console.error('Error loading translations:', err));

function updateContent() {

    document.querySelector('.apply-main-info-section-headline-first-line').textContent = i18next.t('apply-headline');
    document.querySelector('.apply-main-info-section-text').textContent = i18next.t('apply-text');
    document.querySelector('.apply-section-character').setAttribute('alt', i18next.t('apply-image-alt'));
    document.querySelector('label[for="full-name"]').textContent = i18next.t('full-name-label');
    document.querySelector('label[for="email"]').textContent = i18next.t('email-label');
    document.querySelector('label[for="residence"]').textContent = i18next.t('residence-label');
    document.querySelector('label[for="channel"]').textContent = i18next.t('channel-label');
    document.querySelector('label[for="followers"]').textContent = i18next.t('followers-label');
    document.querySelector('label[for="age-check"]').textContent = i18next.t('age-check-label');
    document.querySelector('.note').textContent = i18next.t('application-note');
    document.querySelector('.error-message span').textContent = i18next.t('check-fields');
    document.querySelector('#error-message-icon').innerHTML = i18next.t('error-icon');
    document.querySelector('#submit-button').textContent = i18next.t('submit-button');
    document.querySelector('.values-header-headline-wrapper h3').textContent = i18next.t('features-you-will');
    document.querySelector('.values-header p').textContent = i18next.t('available-exclusively');

    const accordionItems = document.querySelectorAll('.accordion');
    accordionItems[0].querySelector('.accordion-text').textContent = i18next.t('join-the-community');
    accordionItems[1].querySelector('.accordion-text').textContent = i18next.t('merchandising');
    accordionItems[2].querySelector('.accordion-text').textContent = i18next.t('updates-preview');
    accordionItems[3].querySelector('.accordion-text').textContent = i18next.t('video-inbox');
    accordionItems[4].querySelector('.accordion-text').textContent = i18next.t('new-games');

    
    document.querySelectorAll('.panel')[0].querySelector('h4').textContent = i18next.t('access-discord');
    document.querySelectorAll('.panel')[0].querySelector('p').textContent = i18next.t('discord-description');
    document.querySelectorAll('.panel')[1].querySelector('h4').textContent = i18next.t('for-you-or-followers');
    document.querySelectorAll('.panel')[1].querySelector('p').textContent = i18next.t('merch-description');
    document.querySelectorAll('.panel')[2].querySelector('h4').textContent = i18next.t('be-first');
    document.querySelectorAll('.panel')[2].querySelector('p').textContent = i18next.t('update-preview-description');
    document.querySelectorAll('.panel')[3].querySelector('h4').textContent = i18next.t('your-videos-in-games');
    document.querySelectorAll('.panel')[3].querySelector('p').textContent = i18next.t('video-inbox-description');
    document.querySelectorAll('.panel')[4].querySelector('h4').textContent = i18next.t('access-new-games');
    document.querySelectorAll('.panel')[4].querySelector('p').textContent = i18next.t('new-games-description');

    document.querySelector('.creators-main-info-section-headline-first-line').textContent = i18next.t('what-is-subara');
    document.querySelector('.creators-main-info-section-headline-second-line').textContent = i18next.t('what-is-subaraa');
    document.querySelector('.creators-main-info-section-subheading').textContent = i18next.t('subheading');
    document.querySelector('.creators-main-info-section-text').textContent = i18next.t('subara-description');

    const secondSectionHeadlines = document.querySelectorAll('.creators-main-info-section-headline-first-line')[1];
    const secondSectionSubheading = document.querySelectorAll('.creators-main-info-section-subheading')[1];
    const secondSectionText = document.querySelectorAll('.creators-main-info-section-text')[1];

    secondSectionHeadlines.textContent = i18next.t('whats-in-for-creators');
    secondSectionSubheading.textContent = i18next.t('exclusive-perks');
    secondSectionText.textContent = i18next.t('creators-community-description');

    document.querySelector('.slide-1 h1').textContent = i18next.t('creators-header');
    document.querySelector('.slide-1 p').textContent = i18next.t('creators-description');
    document.querySelector('.slide-2 h2').textContent = i18next.t('first-looks-header');
    document.querySelector('.slide-2 p').textContent = i18next.t('first-looks-description');
    document.querySelector('.slide-3 h2').textContent = i18next.t('advanced-tools-header');
    document.querySelector('.slide-3 p').textContent = i18next.t('advanced-tools-description');
    document.querySelector('.slide-4 h2').textContent = i18next.t('team-support-header');
    document.querySelector('.slide-4 p').textContent = i18next.t('team-support-description');
    document.querySelector('.slide-5 h2').textContent = i18next.t('insider-access-header');
    document.querySelector('.slide-5 p').textContent = i18next.t('insider-access-description');

    document.querySelector('.fisrt-extanded-regular-menu-section-about').textContent = i18next.t('mobile-menu-about-us');
    document.querySelector('.fisrt-extanded-regular-menu-section-explore').textContent = i18next.t('mobile-menu-explore');
    document.querySelector('.fisrt-extanded-regular-menu-section-working').textContent = i18next.t('mobile-menu-working-with-us');
    document.querySelector('.fisrt-extanded-regular-menu-section-positions').textContent = i18next.t('footer-section-open-position');
    document.querySelector('.fisrt-extanded-regular-menu-section-help').textContent = i18next.t('mobile-menu-help');
    document.querySelector('.fisrt-extanded-regular-menu-section-creators').textContent = i18next.t('mobile-menu-creators');
    document.querySelector('.fisrt-extanded-regular-menu-section-media').textContent = i18next.t('mobile-menu-press-media');
    
    document.querySelectorAll('.extended-menu-inactive-button').forEach(el => el.textContent = i18next.t('menu-games'));
    document.querySelectorAll('#first-extended-menu-button').forEach(el => el.textContent = i18next.t('menu-explore'));
    document.querySelectorAll('#second-extended-menu-button').forEach(el => el.textContent = i18next.t('menu-careers'));
    document.querySelectorAll('#third-extended-menu-button').forEach(el => el.textContent = i18next.t('menu-support'));
    document.querySelectorAll('.mobile-menu-section h2').forEach((el, index) => {
        const keys = ['mobile-menu-games', 'mobile-menu-explore', 'mobile-menu-careers', 'mobile-menu-support'];
        if (keys[index]) el.textContent = i18next.t(keys[index]);
    });
    document.querySelectorAll('.dropdown-content li').forEach((el, index) => {
        const keys = ['mobile-menu-about-us', 'mobile-menu-social-impact', 'mobile-menu-working-with-us', 'mobile-menu-open-position', 'mobile-menu-help', 'mobile-menu-creators', 'mobile-menu-press-media'];
        if (keys[index]) el.textContent = i18next.t(keys[index]);
    });
    document.querySelectorAll('.main-info-section-new-marker').forEach(el => el.textContent = i18next.t('main-info-new'));
    document.querySelectorAll('.main-info-section-text').forEach(el => el.textContent = i18next.t('main-info-description'));
    document.querySelectorAll('.main-info-section-wrapper button').forEach(el => el.textContent = i18next.t('main-info-button'));
    document.querySelectorAll('.platforms-headline').forEach(el => el.textContent = i18next.t('platforms-available'));
    document.querySelectorAll('.app-store-text span').forEach(el => el.textContent = i18next.t('platforms-download-on'));
    document.querySelectorAll('.google-play-text span').forEach(el => el.textContent = i18next.t('platforms-get-it-on'));
    document.querySelectorAll('.amazone-text span').forEach(el => el.textContent = i18next.t('platforms-available-at'));
    document.querySelectorAll('.product-cards-headline').forEach(el => el.textContent = i18next.t('product-cards-headline'));


    document.querySelectorAll('.product-cards-button').forEach(el => el.textContent = i18next.t('product-cards-button'));
    document.querySelectorAll('.environment-section-headline-text').forEach(el => el.textContent = i18next.t('environment-section-headline-you-play'));
    document.querySelectorAll('.environment-section-headline-decorated-text').forEach(el => el.textContent = i18next.t('environment-section-headline-we-plant'));
    document.querySelectorAll('.environment-section-statistic-text').forEach(el => el.textContent = i18next.t('environment-section-statistic-text'));
    document.querySelectorAll('.environment-section-button').forEach(el => el.textContent = i18next.t('environment-section-button'));


    document.querySelectorAll('.link-wrapper-games').forEach(el => el.textContent = i18next.t('menu-games'));
    document.querySelectorAll('.link-wrapper-about-us').forEach(el => el.textContent = i18next.t('mobile-menu-about-us'));
    document.querySelectorAll('.link-wrapper-social-impact').forEach(el => el.textContent = i18next.t('footer-section-social-impact'));
    document.querySelectorAll('.link-wrapper-working-at-subara').forEach(el => el.textContent = i18next.t('footer-section-working-at-subara'));
    document.querySelectorAll('.link-wrapper-open-position').forEach(el => el.textContent = i18next.t('footer-section-open-position'));


    document.querySelectorAll('.footer-section-support').forEach(el => el.textContent = i18next.t('menu-support'));
    document.querySelectorAll('.footer-section-explore').forEach(el => el.textContent = i18next.t('footer-section-explore'));
    document.querySelectorAll('.footer-section-careers').forEach(el => el.textContent = i18next.t('footer-section-careers'));
    document.querySelectorAll('.link-wrapper-help').forEach(el => el.textContent = i18next.t('footer-section-help'));
    document.querySelectorAll('.link-wrapper-creators').forEach(el => el.textContent = i18next.t('footer-section-creators'));
    document.querySelectorAll('.link-wrapper-media').forEach(el => el.textContent = i18next.t('footer-section-press-media'));
    document.querySelectorAll('.footer-legal-year').forEach(el => el.textContent = i18next.t('footer-legal-text'));
    document.querySelectorAll('.link-wrapper-terms').forEach(el => el.textContent = i18next.t('footer-terms-and-privacy'));

    document.querySelector('.helpFormHeadline').textContent = i18next.t('help-title');
    document.querySelectorAll('.label').forEach((el, index) => {
      const keys = ['help-name', 'help-email','help-message'];
      el.textContent = i18next.t(keys[index]);
    });
    document.querySelector('.submit-btn').textContent = i18next.t('help-submit');
}

document.getElementById('lang-locatizator').addEventListener('change', (event) => {
    i18next.changeLanguage(event.target.value.toLowerCase(), (err, t) => {
        if (err) return console.error(err);
        updateContent();
    });
});

document.querySelectorAll('.mobile-lang-selector .lang-option').forEach(el => {
    el.addEventListener('click', () => {
        const lang = el.dataset.lang.toLowerCase();
        i18next.changeLanguage(lang, (err, t) => {
            if (err) return console.error(err);
            updateContent();
        });
    });
});


document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;
    const errorMessage = document.querySelector(".error-message");
    const errorIcon = document.getElementById("error-message-icon");

    let isValid = true;

    form.querySelectorAll("input[required]").forEach((input) => {
        if (!input.value.trim() || (input.type === "checkbox" && !input.checked)) {
            input.classList.add("error"); 
            isValid = false;
        } else {
            input.classList.remove("error"); 
        }
    });

    if (!isValid) {
        errorMessage.style.display = "flex"; 
        errorIcon.style.display = "block";
        return; 
    } else {
        errorMessage.style.display = "none"; 
        errorIcon.style.display = "none";
    }

   
    const formData = {
        fullName: document.getElementById('full-name').value,
        email: document.getElementById('email').value,
        residence: document.getElementById('residence').value,
        channel: document.getElementById('channel').value,
        followers: document.getElementById('followers').value,
        ageCheck: document.getElementById('age-check').checked
    };

    try {
        const response = await fetch('http://localhost:5000/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        if (response.ok) {
            console.log('Дані успішно відправлено!');
            form.reset(); 

            form.querySelectorAll('input').forEach(input => {
                input.classList.remove('error');
            });
        } else {
            console.log('Помилка: ' + result.message);
        }
    } catch (error) {
        console.error('Помилка відправки:', error);
        console.log('Не вдалося відправити дані.');
    }
});


document.querySelectorAll('input').forEach(input => {
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
});

 const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'cube',
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    speed: 4000, 
    preloadImages: false, 
    lazy: true,
    on: {
        init: function () {
            const swiperSlides = document.querySelectorAll('.swiper-slide img');
            swiperSlides.forEach(slide => {
                slide.onload = function() {
                    this.style.opacity = 1;
                };
            });
        },
        slideChangeTransitionStart: function () {
            document.querySelector('.swiper-button-next').classList.add('hidden');
            document.querySelector('.swiper-button-prev').classList.add('hidden');
        },
        slideChangeTransitionEnd: function () {
            document.querySelector('.swiper-button-next').classList.remove('hidden');
            document.querySelector('.swiper-button-prev').classList.remove('hidden');
        }
    }
});

const acc = document.getElementsByClassName("accordion");
const imageContainer = document.querySelector(".image-container-values");
const images = document.querySelectorAll(".image-container-values img");

function activateAccordion(button) {
  const textElement = button.querySelector('.accordion-text');
  button.classList.add("active");
  button.style.fontSize = "35px";
  button.style.borderBottom = "none";
  textElement.style.background = "linear-gradient(270deg, #00A3FF 0.11%, #FF00FF 100.11%)";
  textElement.style.webkitBackgroundClip = "text";
  textElement.style.webkitTextFillColor = "transparent";
  const panel = button.nextElementSibling;
  panel.style.display = "flex";
  const index = Array.prototype.indexOf.call(acc, button);
  changeImage(index);
}


function changeImage(index) {
  const imageHeight = images[0].clientHeight;
  imageContainer.style.transition = "transform 0.5s ease";
  imageContainer.style.transform = `translateY(-${index * imageHeight}px)`;
}

if (acc.length > 0) {
  activateAccordion(acc[0]);
}

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      this.style.fontSize = "";
      this.style.borderBottom = "";
      const panel = this.nextElementSibling;
      panel.style.maxHeight = null;
      panel.style.display = "none";
      const textElement = this.querySelector('.accordion-text');
      textElement.style.background = "";
      textElement.style.webkitBackgroundClip = "";
      textElement.style.webkitTextFillColor = "";
    } 
    else {
      for (let j = 0; j < acc.length; j++) {
        acc[j].classList.remove("active");
        acc[j].style.fontSize = "";
        acc[j].style.borderBottom = "";
        const panel = acc[j].nextElementSibling;
        panel.style.maxHeight = null;
        panel.style.display = "none";
        const textElement = acc[j].querySelector('.accordion-text');
        textElement.style.background = "";
        textElement.style.webkitBackgroundClip = "";
        textElement.style.webkitTextFillColor = "";
      }
      activateAccordion(this);
    }
  });
}

imageContainer.style.transition = "none";
imageContainer.style.transform = "translateY(0)";

