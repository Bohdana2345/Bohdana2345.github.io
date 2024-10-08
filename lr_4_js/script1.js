let photoblock = document.getElementById('photo-block');
let photonumblock = document.getElementById('photo-num-block');
let descriptionblock = document.getElementById('description-block');

let imagesArray = [
    {path: 'images/001.jpg', title: 'Real Madrid', description: 'Іспанський футбольний клуб'},
    {path: 'images/002.jpg', title: 'Manchester City', description: 'Англійський футбольний клуб'},
    {path: 'images/003.jpg', title: 'Bayern Munich', description: 'Німецький футбольний клуб'}
];

let index = 0;

function initPhotoRotator(photoblock, imagesArray, currentIndex){
    photoblock.innerHTML = '';
    photonumblock.innerHTML = '';
    descriptionblock.innerHTML = '';
    let img = document.createElement('img');
    let photo_num = document.createElement('span');
    let title = document.createElement('span');
    let description = document.createElement('span');
    photo_num.textContent = `Фотографія ${currentIndex+1} з ${imagesArray.length}`;
    title.textContent = imagesArray[currentIndex].title;
    title.style.fontWeight = 'bold';
    title.style.display = 'block';
    description.textContent = imagesArray[currentIndex].description;
    img.src = imagesArray[currentIndex].path;
    photoblock.appendChild(img);
    photonumblock.appendChild(photo_num);
    descriptionblock.appendChild(title);
    descriptionblock.appendChild(description);
}

function nextPhoto(){
    index++;
    if (index >= imagesArray.length){
        index = 0;
    }
    initPhotoRotator(photoblock, imagesArray, index);
}

document.getElementById('prev').onclick = prevPhoto; 

function prevPhoto(){
    console.log('prevPhoto');
    index--;
    if (index < 0){
        index = imagesArray.length - 1;
    }
    initPhotoRotator(photoblock, imagesArray, index);
}
