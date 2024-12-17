fetch('translations.json')
  .then(response => response.json())
  .then(data => {
    i18next.init({
      lng: 'en', 
      debug: true,
      resources: data
    }, function (err, t) {
      if (err) return console.error(err);
      loadCardsData();
    });
  })
  .catch(err => console.error('Error loading translations:', err));


function updateContent() {

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
    document.querySelector('h1').textContent = i18next.t('about-heading');
    document.querySelector('.about-bg-section-main-text-wrapper p').textContent = i18next.t('about-description');
    document.querySelectorAll('.story-section-text-wrapper p span').forEach((el, index) => {
        if (index === 0) {
            el.textContent = i18next.t('story-part1');
        } else {
            el.textContent = i18next.t('story-part2');
        }
    });
    document.querySelector('#wwh-heading').textContent = i18next.t('wwh-heading');
    document.querySelector('#wwh-paragraph').textContent = i18next.t('wwh-paragraph');
    document.querySelector('#circle-1').textContent = i18next.t('wwh-what');
    document.querySelector('#circle-2').textContent = i18next.t('wwh-how');
    document.querySelector('#circle-3').textContent = i18next.t('wwh-why');
    document.querySelector('.values-header h3').textContent = i18next.t('values-header');
    document.querySelector('.values-header p').textContent = i18next.t('values-description');
    document.querySelectorAll('.accordion span.accordion-text').forEach((el, index) => {
        const accordionTitles = ['enjoyment', 'growth', 'creativity', 'integrity', 'impact'];
        el.textContent = i18next.t(accordionTitles[index]);
    });
    document.querySelectorAll('.panel h4').forEach((el, index) => {
        const accordionHeadings = ['enjoyment-heading', 'growth-heading', 'creativity-heading', 'integrity-heading', 'impact-heading'];
        el.textContent = i18next.t(accordionHeadings[index]);
    });

    document.querySelectorAll('.panel p').forEach((el, index) => {
        const accordionTexts = ['enjoyment-text', 'growth-text', 'creativity-text', 'integrity-text', 'impact-text'];
        el.textContent = i18next.t(accordionTexts[index]);
    });

    document.querySelector('.environment-button').textContent = i18next.t('learn-more');
    document.querySelector('.position-headline-text').textContent = i18next.t('jobs-for-game-changers');
    document.querySelector('.position-button').textContent = i18next.t('positions');
    document.querySelector('.job-headline-text').textContent = i18next.t('become-content-creator');
    document.querySelector('.job-button').textContent = i18next.t('apply');
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

window.onload = function() {
  loadCardsData(); 
};


function createEnvironmentCard(data) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('about-environment-section-wrapper', 'cards-section-wrapper');

  const headline = document.createElement('div');
  headline.classList.add('environment-section-headline');
  headline.classList.add('about-environment-section-headline');
  const headlineText = document.createElement('span');
  headlineText.classList.add('environment-section-headline-text');
  headlineText.classList.add('about-environment-section-headline-text');
  headlineText.textContent = i18next.t(data.headlineText); 

  const headlineDecoratedText = document.createElement('span');
  headlineDecoratedText.classList.add('environment-section-headline-decorated-text');
  headlineDecoratedText.classList.add('about-environment-section-headline-decorated-text');
  headlineDecoratedText.textContent = i18next.t(data.headlineDecoratedText);

  headline.appendChild(headlineText);
  headline.appendChild(headlineDecoratedText);

  const button = document.createElement('button');
  button.classList.add('environment-button', 'cards-section-button');
  button.textContent = i18next.t(data.buttonText); 

  wrapper.appendChild(headline);
  wrapper.appendChild(button);

  return wrapper;
  updateContent(); 
}

function createPositionCard(data) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('position-wrapper', 'cards-section-wrapper');

  const bgSpan = document.createElement('span');
  bgSpan.classList.add('about-positions-card-bg');
  const headlineTextWrapper = document.createElement('div');
  headlineTextWrapper.classList.add('position-headline-text-wrapper');
  const headlineText = document.createElement('h5');
  headlineText.classList.add('position-headline-text');

  if (data.headlineText) {
    headlineText.textContent = data.headlineText; 
  } 

  headlineTextWrapper.appendChild(headlineText);
  const button = document.createElement('a');
  button.classList.add('position-button', 'cards-section-button');

  if (data.buttonText) {
    button.textContent = data.buttonText;
  } 
  if (data.link) {
    button.href = data.link;
  } 

  wrapper.appendChild(bgSpan);
  wrapper.appendChild(headlineTextWrapper); 
  wrapper.appendChild(button);
  return wrapper;

}

function createJobCard(data) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('job-wrapper', 'cards-section-wrapper');

  const bgSpan = document.createElement('span');
  bgSpan.classList.add('about-job-card-bg');

  const headlineTextWrapper1 = document.createElement('div');
  headlineTextWrapper1.classList.add('job-headline-text-wrapper');

  const headlineText = document.createElement('h5');
  headlineText.classList.add('job-headline-text');
  headlineText.textContent = i18next.t(data.headlineText); 

  headlineTextWrapper1.appendChild(headlineText);
  const button = document.createElement('a');
  button.classList.add('job-button', 'cards-section-button');
  button.textContent = i18next.t(data.buttonText); 
  button.href = data.link;

  wrapper.appendChild(headlineTextWrapper1);
  wrapper.appendChild(bgSpan);
  wrapper.appendChild(button);
  return wrapper;

}

function createCard(data) {
  switch (data.type) {
    case 'environment':
      return createEnvironmentCard(data);
    case 'position':
      return createPositionCard(data);
    case 'job':
      return createJobCard(data);
    default:
      console.warn('Unknown card type:', data.type);
      return null;
  }
}

function loadCardsData() {
    const url = 'https://raw.githubusercontent.com/Bohdana2345/Bohdana2345.github.io/main/about-page-info-cards.json';
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(cardsData => {
      cardsData.forEach(cardData => {
        const card = createCard(cardData);
        if (card) {
          cardsSection.appendChild(card);
        }
      });
      updateContent();
    })
    .catch(error => {
      console.error('Помилка завантаження JSON:', error);
    });
}

window.onload = function() {
    const circles = document.querySelectorAll('.radial-navigation1, .radial-navigation2, .radial-navigation3');
    const h2Element = document.getElementById('wwh-heading');
    const pElement = document.getElementById('wwh-paragraph');
    let currentActiveCircle = null; 
    const defaultText = {
        'radial-navigation1': {
            en: { h2: 'What we do', p: 'We create innovative solutions to bring people together through play.' },
            uk: { h2: 'Що ми робимо', p: 'Ми створюємо інноваційні рішення, щоб об\'єднувати людей через гру.' }
        },
        'radial-navigation2': {
            en: { h2: 'How we do it', p: 'By combining creativity, technology, and collaboration.' },
            uk: { h2: 'Як ми це робимо', p: 'Поєднуючи креативність, технології та співпрацю.' }
        },
        'radial-navigation3': {
            en: { h2: 'Why we do it', p: 'To harness the power of play so that together we can change the world for the better.' },
            uk: { h2: 'Чому ми це робимо', p: 'Щоб використати силу гри і разом змінити світ на краще.' }
        }
    };

    function updateText() {
        const currentLanguage = i18next.language;
        if (currentActiveCircle) {
            const className = Array.from(currentActiveCircle.classList).find(cls => cls.includes('radial-navigation'));
            if (className && defaultText[className]) {
                const texts = defaultText[className][currentLanguage];
                h2Element.textContent = texts.h2;
                pElement.textContent = texts.p;
            }
        }
    }

    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            if (currentActiveCircle === circle) return;
            circles.forEach(c => c.classList.remove('active')); 
            circle.classList.add('active');
            currentActiveCircle = circle; 
            updateText();
        });
    });
    i18next.on('languageChanged', () => {
    console.log('Language changed, updating text...');
    circles.forEach(c => c.classList.remove('active')); 
    const firstCircle = circles[2]; 
    firstCircle.classList.add('active'); 
    currentActiveCircle = firstCircle;
    updateText(); 
});

    const thirdCircle = circles[2]; 
    thirdCircle.classList.add('active');
    currentActiveCircle = thirdCircle; 
    updateText(); 
}

const acc = document.getElementsByClassName("accordion");
const imageContainer = document.querySelector(".image-container-values");
const images = document.querySelectorAll(".image-container-values img");

let previousIndex = 0; 

function activateAccordion(button) {
  const textElement = button.querySelector('.accordion-text');
  button.classList.add("active");
  button.style.fontSize = "35px";
  button.style.borderBottom = "none";
  textElement.style.background = "linear-gradient(90deg, #00FFF0 0%, #FFF230 100%)";
  textElement.style.webkitBackgroundClip = "text";
  textElement.style.webkitTextFillColor = "transparent";
  const panel = button.nextElementSibling;
  panel.style.display = "block";

  const currentIndex = Array.prototype.indexOf.call(acc, button);
  changeImage(currentIndex);
  previousIndex = currentIndex; 
}

function changeImage(currentIndex) {
  const imageHeight = images[0].clientHeight;
  if (currentIndex < previousIndex) {
    imageContainer.style.transition = "transform 0.5s ease";
    imageContainer.style.transform = `translateY(-${currentIndex * imageHeight}px)`;
  }
   else if (currentIndex > previousIndex) {
    imageContainer.style.transition = "transform 0.5s ease";
    imageContainer.style.transform = `translateY(-${currentIndex * imageHeight}px)`;
  }
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
document.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const brandingSection = document.querySelector('.branding-section');
    brandingSection.style.backgroundPositionX = `-${scrollPosition * 2}px`;
});
