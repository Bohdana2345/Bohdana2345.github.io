function cutText() {
    let blocks = document.querySelectorAll('div');
    blocks.forEach(block => {
    if (block.textContent.length > 10) {
        block.textContent =  block.textContent.slice(0, 10) + '...';
    }
});
}

let button = document.getElementById('button');
button.addEventListener('click', function() {
    cutText();
});
