function Temperature_calculator(degrees) {
    console.log('AAAAA')
    let temp;
    let calculated_temp;
    let temp_c = document.getElementById('temperatute_in_celcius');
    let temp_f = document.getElementById('temperatute_in_fahrenheit');
    if (degrees ==='fahrenheit'){
        temp_c.value =  5/9 * (temp_f.value-32);
    }
    else if (degrees ==='celcius') {
        temp_f.value =  temp_c.value* (9/5) + 32;
    }
    else{
        alert("Одиниця вимірювання не визначена!")
    }
}


const field = document.querySelectorAll('.input-container input[name]');
for(let i of field){
    i.addEventListener('input', (e) => {
        console.log(e.target.name)
        let temp;
        let calculated_temp;
        let temp_c = document.getElementById('temperatute_in_celcius');
        let temp_f = document.getElementById('temperatute_in_fahrenheit');
        if (e.target.name ==='fahrenheit'){
            temp_c.value =  5/9 * (temp_f.value-32);
        }
        else if (e.target.name ==='celcius') {
            temp_f.value =  temp_c.value* (9/5) + 32;
        }
        else{
            alert("Одиниця вимірювання не визначена!")
        }
    })
}


let right_value;
let score = document.getElementById('score');
let right_answers = 0;
let wrong_answers = 0;
let score_count = 0;

function Multiplication_calculator(action){
    let first_num;
    let second_num;
    let task = document.getElementById('task');

    switch (action){
        case 'next':
            if(document.getElementById('answer')){
            document.getElementById('answer').value = '';
            }
            first_num = Math.floor(Math.random() * 9) + 1;
            second_num = Math.floor(Math.random() *10) + 1;
            task.textContent = first_num + '*' + second_num + '=';
            right_value = first_num*second_num;
            score_count++;
            break;

        case 'check':
            let answerValue = document.getElementById('answer').value;
            let taskContent = task.textContent;
            if (answerValue !== '' && taskContent !== '') {
                    let answer = parseInt(document.getElementById('answer').value); 
                        let check = document.getElementById('check');
                        if(answer===right_value){
                        check.textContent ="Молодець, відповідь правильна!";
                        if (right_answers<score_count&&wrong_answers+right_answers<score_count){
                            right_answers++;
                        } 
                        }
                        else{
                            check.textContent =`Помилка, правильна відповідь «${right_value}»`;
                            if (wrong_answers<score_count&&wrong_answers+right_answers<score_count){
                                wrong_answers++;
                            } 
                        }
                        score.textContent =`Загальний рахунок ${(right_answers * 100 / score_count).toFixed(1)}% (${right_answers} правильних відповідей з ${score_count})`;
                        break;
                    }
                
    }
   
}
Multiplication_calculator('next');

function Multiplication_calculator2(){
    let first_num;
    let option_num;
    let second_num;
    let task = document.getElementById('task');
    let options = document.getElementsByClassName('option');
    let radioButtons = document.querySelectorAll('input[type="radio"]');

    radioButtons.forEach(radio => radio.checked = false);
    first_num = Math.floor(Math.random() * 9) + 1;
    second_num = Math.floor(Math.random() *10) + 1;
    task.textContent = first_num + '*' + second_num + '=';
    right_value = first_num*second_num;
    score_count++;
    let generatedNumbers = []; 
    let range = 5; 
    for (let i = 0; i < 3; i++) {
        do {
            option_num = Math.floor(Math.random() * (2 * range)) + (right_value - range);//2 * - показує кількість чисел, які можна згенерувати в обидва боки від right_value - ЦЕ НЕ КОМЕНТАР ЧАТА-ДЖПТ
        } while (generatedNumbers.includes(option_num)|| option_num < 1||option_num===right_value); 
        
        generatedNumbers.push(option_num); 
    }
    let randomIndex = Math.floor(Math.random() * (generatedNumbers.length + 1));
    generatedNumbers.splice(randomIndex, 0, right_value);

    for (let i in options){
        options[i].textContent = generatedNumbers[i];
    }
}

function answerChange(value) {
    let answer = parseInt(document.querySelector(`label[for="${value}"]`).textContent);
    if(answer===right_value){
    check.textContent ="Молодець, відповідь правильна!";
    if (right_answers<score_count&&wrong_answers+right_answers<score_count){
        right_answers++;
    } 
    }
    else{
        check.textContent =`Помилка, правильна відповідь «${right_value}»`;
        if (wrong_answers<score_count&&wrong_answers+right_answers<score_count){
            wrong_answers++;
        } 
    }
    score.textContent =`Загальний рахунок ${(right_answers * 100 / score_count).toFixed(1)}% (${right_answers} правильних відповідей з ${score_count})`;
}


// let imagesArray = [ {path: 'images/001.jpg',
//     title : 'Real Madrid',
//     description : 'Іспанський футбольний клуб'
//     },
//     {path: 'images/002.jpg',
//     title : 'Manchester City',
//     description : 'Англійський футбольний клуб'
//     },
//     {path: 'images/003.jpg',
//     title : 'Bayern Munich',
//     description : 'Німецький футбольний клуб'
//     }
    
//     ];
   

// let index = 0;

// function initPhotoRotator(photoblock, imagesArray, index){
//     let img = document.createElement('img');
//     img.src = imagesArray[index].path;
//     let photoblock = document.getElementById('photoblock');
//     if (photoblock) {
//      photoblock.appendChild(img);
//     } else {
//         console.error(`Елемент не знайдено`)    ;
//     }
//     }

//     function nextPhoto(){
//         index++;
//         if (index>=imagesArray.length){
//             index = 0;
//         }
//             initPhotoRotator(index);
//     }

//     function prevPhoto(){
//         index--;
//         if (index<0){
//             index = imagesArray.length - 1;
//         }
//             initPhotoRotator(index);
//     }


// initPhotoRotator(photoblock, imagesArray, index);

// div 1 в html; зміна тільки адреси зображень