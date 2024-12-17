fetch('translations.json')
  .then(response => response.json())
  .then(data => {
    i18next.init({
      lng: 'en', 
      debug: true,
      resources: data
    }, function (err, t) {
      if (err) return console.error(err);
      updateContent();
    });
  })
  .catch(err => console.error('Error loading translations:', err));

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



const url = 'https://raw.githubusercontent.com/Bohdana2345/Bohdana2345.github.io/main/product-cards.json';

const gameCardsWrapper = document.getElementById('gameCardsWrapper');

function createGameCard(game, index) {
    const gameCard = document.createElement('div');
    gameCard.classList.add('game-card');
    gameCard.setAttribute('data-game-name', game.gameName);
    const gameLink = document.createElement('a');
    
    let gameUrl;
    if (index === 0) {
      gameUrl = 'game-detail.html'; 
    } else if (index === 1) {
      gameUrl = 'https://play.google.com/store/apps/details?id=com.playtoddlers.sunnyschoolstories.free&hl=uk'; 
    } else if (index === 2) {
      gameUrl = 'https://play.google.com/store/apps/details?id=com.playtoddlers.centralhospitalstories.free&hl=uk'; 
    }
  
    gameLink.setAttribute('href', gameUrl); 
    gameLink.classList.add('game-card-link'); 
    const headline = document.createElement('span');
    headline.classList.add('game-card-headline');
    headline.textContent = game.headline;
    const breakLine = document.createElement('span');
    breakLine.classList.add('break-line');
    breakLine.textContent = game.subHeadline;
    headline.appendChild(breakLine);
    gameLink.appendChild(headline);
    gameCard.appendChild(gameLink);
  
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
        gamesData.forEach((game, index) => {
          const gameCard = createGameCard(game, index); 
          gameCardsWrapper.appendChild(gameCard);
        });
      })
      .catch(error => {
        console.error('Помилка завантаження JSON:', error);
      });
}

loadGamesData();


const body = document.body;
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

document.addEventListener('DOMContentLoaded', function() {
    let bgElement = document.querySelector('.home-bg-section');
    bgElement.style.backgroundImage = 'url("/assets/img/main/home-bg.webp")';
});

