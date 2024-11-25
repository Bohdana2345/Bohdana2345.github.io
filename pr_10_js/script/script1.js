document.addEventListener("DOMContentLoaded", () => {
    let translations = {};


    async function loadLanguage(lang) {
        try {
            const response = await fetch(`/locales/${lang}.json`);
            if (!response.ok) {
                throw new Error(`Failed to fetch translations for ${lang}`);
            }
            translations = await response.json();
            updateText();
        } catch (error) {
            console.error("Error loading translation:", error);
        }
    }

    function updateText() {
        document.getElementById('greeting').textContent = translations['greeting'] || 'greeting';
        document.getElementById('farewell').textContent = translations['farewell'] || 'farewell';
    }

    document.getElementById('language-selector').addEventListener('change', function () {
        const selectedLanguage = this.value;
        loadLanguage(selectedLanguage);
    });

    loadLanguage('en');
});