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
const mobileBtn = document.getElementById('mobileMenuIcon');
const menuContent = document.querySelector('.mobile-menu-content');
const mobileMenu = document.querySelector('.mobile-menu');
const logo = document.getElementById('logo');

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
        menuSection.classList.remove('active');
    } else {
        contentWrapper.classList.add('blurred');
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

const openHelpModalBtns = document.querySelectorAll(".link-wrapper-help"); 
const closeHelpModalBtn = document.getElementById("closeHelpModalBtn");
const helpModal = document.getElementById("helpModal");

openHelpModalBtns.forEach(btn => {
  btn.onclick = function () {
    helpModal.style.display = "block";
  };
});

closeHelpModalBtn.onclick = function () {
  helpModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == helpModal) {
    helpModal.style.display = "none";
  }
};

const openHelpModalBtnMobile = document.querySelector(".mobile-menu-help.link-wrapper-help");

openHelpModalBtnMobile.addEventListener("click", function(event) {

  helpModal.style.display = "block";
  const menu = document.getElementById('mobileMenuOverlay');
    const menuSection = document.getElementById('menuSection');
    const mobileMenuIcon = document.getElementById('mobileMenuIcon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const logo = document.getElementById('logo');
    const contentWrapper = document.getElementById('contentWrapper');
  menu.classList.remove('active');
    menuSection.classList.remove('active');
    mobileMenuIcon.classList.remove('active');
    mobileMenu.classList.remove('active');
    logo.classList.remove('active');
    contentWrapper.classList.remove('blurred');
});

document.getElementById('helpForm').addEventListener('submit', async (e) => {
    const form = e.target;
    e.preventDefault();
    const formData = {
        name: document.getElementById('help-name').value,
        email: document.getElementById('help-email').value,
        issue: document.getElementById('help-message').value,
    };

    try {
        const response = await fetch('http://localhost:5000/submit-issue', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        if (response.ok) {
            console.log('Дані успішно відправлено!');
            form.reset(); 
            helpModal.style.display = 'none';
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
