function Temperature_calculator(degrees) {
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
            document.getElementById('answer').value = '';
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

function Multiplication_calculator2(action){
    let first_num;
    let option_num;
    let second_num;
    let task = document.getElementById('task');
    let options = document.getElementsByClassName('option');

    switch (action){
        case 'next':
            first_num = Math.floor(Math.random() * 9) + 1;
            second_num = Math.floor(Math.random() *10) + 1;
            task.textContent = first_num + '*' + second_num + '=';
            right_value = first_num*second_num;
            score_count++;
            for (let i = 0; i < options.length; i++) {
                let option_num = Math.floor(Math.random() * 90) + 1; 
                options[i].textContent = option_num; 
            }
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

Multiplication_calculator2('next');



