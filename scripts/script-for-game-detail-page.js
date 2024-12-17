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

  document.querySelector('.header-main-text-wrapper h2').textContent = i18next.t('header-subtitle');
  document.querySelectorAll('.content-text-block')[0].querySelector('h3').textContent = i18next.t('content-title-1');
  document.querySelectorAll('.content-text-block')[0].querySelectorAll('p')[0].textContent = i18next.t('content-paragraph-1');
  document.querySelectorAll('.content-text-block')[0].querySelectorAll('p')[1].textContent = i18next.t('content-paragraph-2');
  
  document.querySelectorAll('.content-text-block')[1].querySelector('h3').textContent = i18next.t('content-title-2');
  document.querySelectorAll('.content-text-block')[1].querySelectorAll('p')[0].textContent = i18next.t('content-paragraph-3');
  document.querySelectorAll('.content-text-block')[1].querySelectorAll('p')[1].textContent = i18next.t('content-paragraph-4');
  document.querySelectorAll('.content-text-block')[1].querySelectorAll('p')[2].textContent = i18next.t('content-paragraph-5');
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

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('game-detail-urban-city-video');
    const playButton = document.getElementById('play-button');
    video.removeAttribute('controls');
    playButton.style.display = 'flex';

    playButton.addEventListener('click', () => {
        video.play(); 
        playButton.style.display = 'none'; 
        video.setAttribute('controls', 'true'); 
    });

    video.addEventListener('pause', () => {
        playButton.style.display = 'flex'; 
        video.removeAttribute('controls'); 
    });

    video.addEventListener('ended', () => {
        playButton.style.display = 'flex'; 
        video.removeAttribute('controls'); 
    });
});


document.addEventListener("scroll", () => {
    const scrollingSection = document.querySelector(".scrolling-section");
    const firstLine = scrollingSection.querySelector(".scrolling-section-first-line");
    const secondLine = scrollingSection.querySelector(".scrolling-section-second-line");
    const sectionRect = scrollingSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (sectionRect.top < windowHeight && sectionRect.bottom > 0) {
        const scrollProgress = 1 - sectionRect.bottom / (sectionRect.height + windowHeight);
        const translateAmount = scrollProgress * 30; 
        const firstLineTranslateX = -17.7 + translateAmount; 
        const secondLineTranslateX = -46.3722 - translateAmount; 
        firstLine.style.transform = `translateX(${firstLineTranslateX}%)`;
        secondLine.style.transform = `translateX(${secondLineTranslateX}%)`;
    }
});



