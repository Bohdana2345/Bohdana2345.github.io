const resources = {
    en: {
        translation: {
            "menu-games": "Games",
            "menu-explore": "Explore",
            "menu-careers": "Careers",
            "menu-support": "Support",
            "mobile-menu-games": "Games",
            "mobile-menu-explore": `Explore`,
            "mobile-menu-careers": "Careers",
            "mobile-menu-support": "Support",
            "mobile-menu-about-us": "About Us",
            "mobile-menu-social-impact": "Social Impact",
            "mobile-menu-working-with-us": "Working with Us",
            "mobile-menu-open-position": "Open Position",
            "mobile-menu-help": "Help",
            "mobile-menu-creators": "Creators",
            "mobile-menu-press-media": "Press Media",
            "main-info-new": "new",
            "main-info-description": "Travel around the world and build vacation life stories.",
            "main-info-button": "Explore",
            "platforms-available": "Available on",
            "platforms-download-on": "Download on the",
            "platforms-get-it-on": "Get it on",
            "platforms-available-at": "Available at",
            "product-cards-headline": "Explore more games",
            "product-cards-button": "All games",
            "environment-section-headline-you-play": "You play,",
            "environment-section-headline-we-plant": "we plant.",
            "environment-section-statistic-text": "Planted trees and counting",
            "environment-section-button": "Learn more",
            "footer-legal-text": "© 2024 SUBARA SG Ltd.",
            "footer-terms-and-privacy": "Terms and Privacy",
            "footer-section-explore": "Explore",
            "footer-section-careers": "Careers",
            "footer-section-support": "Support",
            "footer-section-about-us": "About Us",
            "footer-section-social-impact": "Social Impact",
            "footer-section-working-at-subara": "Working at Subara",
            "footer-section-open-position": "Open Position",
            "footer-section-help": "Help",
            "footer-section-creators": "Creators",
            "footer-section-press-media": "Press Media",
        }
    },
    uk: {
        translation: {
            "menu-games": "Ігри",
            "menu-explore": "Дослідити",
            "menu-careers": "Кар'єра",
            "menu-support": "Підтримка",
            "mobile-menu-games": "Ігри",
            "mobile-menu-explore": "Дослідити",
            "mobile-menu-careers": "Кар'єра",
            "mobile-menu-support": "Підтримка",
            "mobile-menu-about-us": "Про нас",
            "mobile-menu-social-impact": "Соціальний вплив",
            "mobile-menu-working-with-us": "Співпраця з нами",
            "mobile-menu-open-position": "Вакансії",
            "mobile-menu-help": "Допомога",
            "mobile-menu-creators": "Творці",
            "mobile-menu-press-media": "Преса та ЗМІ",
            "main-info-new": "нове",
            "main-info-description": "Подорожуйте світом та створюйте історії відпусток.",
            "main-info-button": "Дослідити",
            "platforms-available": "Доступно на",
            "platforms-download-on": "Завантажити y",
            "platforms-get-it-on": "Завантажити у",
            "platforms-available-at": "Доступно на",
            "product-cards-headline": "Більше ігор",
            "product-cards-button": "Всі ігри",
            "environment-section-headline-you-play": "Ти граєш,",
            "environment-section-headline-we-plant": "ми садимо.",
            "environment-section-statistic-text": "дерев, і ми продовжуємо",
            "environment-section-button": "Більше",
            "footer-legal-text": "© 2024 SUBARA СГ ТОВ.",
            "footer-terms-and-privacy": "Умови і Політика",
            "footer-section-explore": "Дослідити",
            "footer-section-careers": "Кар'єра",
            "footer-section-support": "Підтримка",
            "footer-section-about-us": "Про нас",
            "footer-section-social-impact": "Соціальний вплив",
            "footer-section-working-at-subara": "Робота з Subara",
            "footer-section-open-position": "Вакансії",
            "footer-section-help": "Допомога",
            "footer-section-creators": "Творці",
            "footer-section-press-media": "Преса та ЗМІ",
        }
    }
};


function updateContent() {
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
}

i18next.init({
    lng: 'en', 
    debug: true,
    resources
}, function (err, t) {
    if (err) return console.error(err);
    updateContent(); 
});

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











const url = 'https://raw.githubusercontent.com/Bohdana2345/Bohdana2345.github.io/main/product-cards.json';

const gameCardsWrapper = document.getElementById('gameCardsWrapper');

function createGameCard(game) {
  const gameCard = document.createElement('div');
  gameCard.classList.add('game-card');
  gameCard.setAttribute('data-game-name', game.gameName);
  
  const headline = document.createElement('span');
  headline.classList.add('game-card-headline');
  headline.textContent = game.headline;

  const breakLine = document.createElement('span');
  breakLine.classList.add('break-line');
  breakLine.textContent = game.subHeadline;

  headline.appendChild(breakLine);
  gameCard.appendChild(headline);

  return gameCard;
}

function loadGamesData() {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(gamesData => {
      gamesData.forEach(game => {
        const gameCard = createGameCard(game);
        gameCardsWrapper.appendChild(gameCard);
      });
    })
    .catch(error => {
      console.error('Помилка завантаження JSON:', error);
    });
}

loadGamesData();






const mobileMenu = document.querySelector('.mobile-menu');
const body = document.body;
const mobileBtn = document.getElementById('mobileMenuIcon');
const homeSection = document.getElementById('homeSection');
const contentWrapper = document.getElementById('contentWrapper');
const homeLogo = document.getElementById('homeBdSectionLogo');
const content = document.querySelector('.content'); 

function homeSectionScrollEffect() {
    const scrollY = window.scrollY;
    const homeHeight = window.innerHeight;
    const screenWidth = window.innerWidth;

    const startTop = 40;
    const newTop = Math.max(startTop - scrollY * 0.3, -150);
    homeLogo.style.top = `${newTop}px`;

    const maxOpacity = 1.2;
    const opacity = Math.min(scrollY / homeHeight, maxOpacity);

    homeSection.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    const minBrightness = 0.3;
    const brightness = Math.max(1 - (scrollY / homeHeight) * 1.2, minBrightness);
    homeSection.style.filter = `brightness(${brightness})`;

    if (scrollY > 0) {
        homeSection.classList.add('scrolled');
        homeSection.classList.remove('mobile-background');
    } else {
        if (screenWidth < 1000) {
            homeSection.classList.add('mobile-background');
            homeSection.classList.remove('scrolled');
        } else {
            homeSection.classList.remove('scrolled', 'mobile-background');
        }
    }

}

window.addEventListener('scroll', homeSectionScrollEffect);
window.addEventListener('load', homeSectionScrollEffect);
window.addEventListener('resize', homeSectionScrollEffect);



const initialValue = 270000;
const maxDigits = 6;
const incrementInterval = 12 * 60 * 60 * 1000;
let currentValue = localStorage.getItem('environment-sectionStat');
let lastUpdateTime = localStorage.getItem('lastUpdateTime');

if (!currentValue) {
    currentValue = initialValue;
    localStorage.setItem('environment-sectionStat', currentValue);
    localStorage.setItem('lastUpdateTime', Date.now());
}
currentValue = parseInt(currentValue, 10);

function updateStatNumber() {
    const now = Date.now();
    const timeDifference = now - parseInt(lastUpdateTime, 10);
    const intervalsPassed = Math.floor(timeDifference / incrementInterval);

    if (intervalsPassed > 0) {
        currentValue += intervalsPassed;
        if (currentValue > 999999) {
            currentValue = 999999;
        }
        localStorage.setItem('environment-sectionStat', currentValue);
        localStorage.setItem('lastUpdateTime', now);
    }
    document.getElementById('stat-number').textContent = formatNumber(currentValue);
}

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

updateStatNumber();

const langSelect = document.getElementById('lang-locatizator');
const langOptions = document.querySelectorAll('.lang-option');

function updateActiveLanguage(selectedLang) {
    langOptions.forEach(option => {
        option.classList.remove('active');
        if (option.dataset.lang === selectedLang) {
            option.classList.add('active');
        }
    });
    langSelect.value = selectedLang;
}

langSelect.addEventListener('change', (event) => {
    const selectedLang = event.target.value;
    updateActiveLanguage(selectedLang);
});

langOptions.forEach(option => {
    option.addEventListener('click', () => {
        const selectedLang = option.dataset.lang;
        updateActiveLanguage(selectedLang);
    });
});

updateActiveLanguage(langSelect.value);

const menuLinks = document.querySelectorAll('.extended-menu-button');
const inactiveLink = document.querySelector('.extended-menu-inactive-button');
inactiveLink.classList.add('active');

menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        if (!this.classList.contains('active')) {
            menuLinks.forEach(link => {
                link.classList.remove('active');
                link.classList.add('inactive');
            });
            this.classList.add('active');
            this.classList.remove('inactive');
        } else {
            this.classList.remove('active');
            menuLinks.forEach(link => {
                link.classList.remove('inactive');
            });
        }

        if (Array.from(menuLinks).some(link => link.classList.contains('active'))) {
            inactiveLink.classList.add('inactive');
        } else {
            inactiveLink.classList.remove('inactive');
        }
    });
});

document.querySelectorAll('.extended-menu-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const block = document.getElementById('expandableBlock');

        switch (this.id) {
            case 'first-extended-menu-button':
                document.getElementById('fisrt-extanded-regular-menu-section').classList.add('active');
                document.getElementById('second-extanded-regular-menu-section').classList.remove('active');
                document.getElementById('third-extanded-regular-menu-section').classList.remove('active');
                break;
            case 'second-extended-menu-button':
                document.getElementById('second-extanded-regular-menu-section').classList.add('active');
                document.getElementById('fisrt-extanded-regular-menu-section').classList.remove('active');
                document.getElementById('third-extanded-regular-menu-section').classList.remove('active');
                break;
            case 'third-extended-menu-button':
                document.getElementById('third-extanded-regular-menu-section').classList.add('active');
                document.getElementById('second-extanded-regular-menu-section').classList.remove('active');
                document.getElementById('fisrt-extanded-regular-menu-section').classList.remove('active');
                break;
        }

        if (block.classList.contains('active')) {
            if (this !== document.querySelector('.extended-menu-button.active')) {
                block.classList.remove('active');
                this.classList.remove('active');
            }
        } else {
            block.classList.add('active');
            this.classList.add('active');
        }

        event.stopPropagation();
    });
});

document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    const menu = document.querySelector(".menu-section");
    let isInAnySection = false;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height;
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;

        if (sectionTop < window.innerHeight / 2 && sectionBottom > window.innerHeight / 2) {
            const sectionId = section.getAttribute("id");
            menu.classList.add(sectionId);
            isInAnySection = true;
        } else {
            const sectionId = section.getAttribute("id");
            menu.classList.remove(sectionId);
        }
    });

    if (!isInAnySection) {
        menu.classList.forEach(className => menu.classList.remove(className));
        menu.classList.add('menu-section');
    }
    
});


document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    document.querySelectorAll('.mobile-menu-section-headline-wrapper').forEach(headline => {
        headline.addEventListener('click', function () {
            const menuSection = this.parentElement;
            menuSection.classList.toggle('active');
        });
    });
});
const menu = document.getElementById('mobileMenuOverlay');
const menuSection = document.getElementById('menuSection');
const menuContent = document.querySelector('.mobile-menu-content');
const logo = document.getElementById('logo');
const homeBgSection = document.querySelector('.home-bg-section');
const homeBgLogo = document.querySelector('.home-bg-section-logo');

mobileBtn.addEventListener('click', () => {
    const isMenuActive = menu.classList.contains('active');
    menu.classList.toggle('active');
    menuContent.classList.toggle('active');
    menuSection.classList.toggle('active');
    mobileBtn.classList.toggle('active');
    logo.classList.toggle('active');
    mobileMenu.classList.toggle('active');

    if (isMenuActive) {
        contentWrapper.classList.remove('blurred');
        homeBgSection.style.transition = 'none';
        homeBgLogo.style.transition = 'none';
        menuSection.classList.remove('active');
    } else {
        contentWrapper.classList.add('blurred');
        homeBgSection.style.transition = 'none';
        homeBgLogo.style.transition = 'none';
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('active')) {
        toggleMenu();
    }
});

function toggleBlur() {
    const menu = document.getElementById('mobileMenuOverlay');
    const menuSection = document.getElementById('menuSection');
    const mobileMenuIcon = document.getElementById('mobileMenuIcon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const logo = document.getElementById('logo');
    const contentWrapper = document.getElementById('contentWrapper');

    if (window.matchMedia('(min-width: 1000px)').matches) {
        menu.classList.remove('active');
        menuSection.classList.remove('active');
        mobileMenuIcon.classList.remove('active');
        mobileMenu.classList.remove('active');
        logo.classList.remove('active');
        contentWrapper.classList.remove('blurred');
    }
}

toggleBlur();
window.addEventListener('resize', toggleBlur);

// window.onload = function() {
//     const questionPrompt = document.createElement('div');
//     questionPrompt.style.position = 'fixed';
//     questionPrompt.style.top = '50%';
//     questionPrompt.style.left = '50%';
//     questionPrompt.style.transform = 'translate(-50%, -50%)';
//     questionPrompt.style.padding = '20px';
//     questionPrompt.style.backgroundColor = '#fff';
//     questionPrompt.style.border = '1px solid #ccc';
//     questionPrompt.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
//     questionPrompt.style.zIndex = '1000';
//     questionPrompt.innerHTML = '<p>Ставите 12?</p>';

//     const yesButton = document.createElement('button');
//     yesButton.textContent = 'Так 👁️👄👁️';
//     yesButton.style.margin = '10px';
//     yesButton.style.padding = '10px 20px';
//     yesButton.style.cursor = 'pointer';
    
//     const noButton = document.createElement('button');
//     noButton.textContent = 'Звісно 👁️👄👁️';
//     noButton.style.margin = '10px';
//     noButton.style.padding = '10px 20px';
//     noButton.style.cursor = 'pointer';

//     questionPrompt.appendChild(yesButton);
//     questionPrompt.appendChild(noButton);
//     document.body.appendChild(questionPrompt);

//     yesButton.addEventListener('click', function() {
//       document.body.removeChild(questionPrompt);
//     });
  
//     noButton.addEventListener('click', function() {
//       document.body.removeChild(questionPrompt);
//     });
// };


