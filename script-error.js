document.addEventListener("DOMContentLoaded", function() {
    console.log("Сторінка 404 завантажена");

    const homeButton = document.querySelector('.btn-home');
    homeButton.addEventListener('click', function(event) {
        alert("Повертаємося на головну!");
    });
});