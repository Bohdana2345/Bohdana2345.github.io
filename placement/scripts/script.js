const mobileMenu = document.querySelector('.mobile-menu');
const body = document.body;
const mobileBtn = document.getElementById('mobileMenuIcon');
const homeLogo = document.querySelector('.home-bg-section-logo');
const homeSection = document.getElementById('homeSection');
const contentWrapper = document.getElementById('contentWrapper');
const content = document.getElementById('content');

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
    homeLogo.style.filter = `brightness(${brightness})`;

    if (scrollY > 0) {
        homeSection.style.background = `linear-gradient(180deg, rgba(0, 0, 0, ${opacity * 1.2}) 100%, rgba(0, 0, 0, 1) 100%), url('./assets/img/home-bg.webp')`;
    } else {
        if (screenWidth < 1000) {
            homeSection.style.background = `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 200%), url('./assets/img/home-bg.webp')`;
        } else {
            homeSection.style.background = `url('./assets/img/home-bg.webp')`;
        }
    }
    homeSection.style.backgroundSize = 'cover';
    homeSection.style.backgroundPosition = 'center center';

    if (scrollY < homeHeight) {
        content.style.transform = `translateY(${-scrollY / 3}px)`;
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
    toggle.addEventListener('click', function () {
        const menuSection = this.parentElement;
        menuSection.classList.toggle('active');
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

window.onload = function() {
    const questionPrompt = document.createElement('div');
    questionPrompt.style.position = 'fixed';
    questionPrompt.style.top = '50%';
    questionPrompt.style.left = '50%';
    questionPrompt.style.transform = 'translate(-50%, -50%)';
    questionPrompt.style.padding = '20px';
    questionPrompt.style.backgroundColor = '#fff';
    questionPrompt.style.border = '1px solid #ccc';
    questionPrompt.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    questionPrompt.style.zIndex = '1000';
    questionPrompt.innerHTML = '<p>Ставите 12?</p>';

    const yesButton = document.createElement('button');
    yesButton.textContent = 'Так 👁️👄👁️';
    yesButton.style.margin = '10px';
    yesButton.style.padding = '10px 20px';
    yesButton.style.cursor = 'pointer';
    
    const noButton = document.createElement('button');
    noButton.textContent = 'Звісно 👁️👄👁️';
    noButton.style.margin = '10px';
    noButton.style.padding = '10px 20px';
    noButton.style.cursor = 'pointer';

    questionPrompt.appendChild(yesButton);
    questionPrompt.appendChild(noButton);
    document.body.appendChild(questionPrompt);

    yesButton.addEventListener('click', function() {
      document.body.removeChild(questionPrompt);
    });
  
    noButton.addEventListener('click', function() {
      document.body.removeChild(questionPrompt);
    });
};


