
function captcha_init(amount) {
    let result = '';
    if (amount > 0) {
        let firstnum = (Math.floor(Math.random() * 9) + 1).toString(); 
        result += firstnum;
    }

    for (let i = 1; i < amount; i++) {
        let number = Math.floor(Math.random() * 10).toString(); 
        result += number;
    }

    return result;
}

const numbers =   {
    0: [

        [1, 1, 1], 
        [1, 0, 1], 
        [1, 0, 1], 
        [1, 0, 1], 
        [1, 1, 1]
    ],
    1: [

        [0, 1, 0], 
        [1, 1, 0], 
        [0, 1, 0], 
        [0, 1, 0], 
        [1, 1, 1]
    ],
    2: [
        [1, 1, 1], 
        [0, 0, 1], 
        [1, 1, 1], 
        [1, 0, 0], 
        [1, 1, 1]
    ],
    3: [
        [1, 1, 1], 
        [0, 0, 1], 
        [1, 1, 1], 
        [0, 0, 1], 
        [1, 1, 1]
    ],
    4: [
        [1, 0, 1], 
        [1, 0, 1], 
        [1, 1, 1], 
        [0, 0, 1], 
        [0, 0, 1]
    ],
    5: [
        [1, 1, 1], 
        [1, 0, 0], 
        [1, 1, 1], 
        [0, 0, 1], 
        [1, 1, 1]
    ],
    6: [
        [1, 1, 1], 
        [1, 0, 0], 
        [1, 1, 1], 
        [1, 0, 1], 
        [1, 1, 1]
    ],
    7: [
        [1, 1, 1], 
        [0, 0, 1], 
        [0, 0, 1], 
        [0, 1, 0], 
        [0, 1, 0]
    ],
    8: [
        [1, 1, 1], 
        [1, 0, 1], 
        [1, 1, 1], 
        [1, 0, 1], 
        [1, 1, 1]
    ],
    9: [
        [1, 1, 1], 
        [1, 0, 1], 
        [1, 1, 1], 
        [0, 0, 1], 
        [1, 1, 1]
     ]
};


let resultStr = captcha_init(8);

function drawNumber() {

    const container = document.getElementById("blockContainer");
    container.innerHTML = ''; 

    for (let i of resultStr) {
        let pattern = numbers[i]; 

        const digitContainer = document.createElement("div"); 
        digitContainer.style.display = "inline-block"; 
        digitContainer.style.marginRight = "15px"; 
        
        for (let row = 0; row < 5; row++) { 
            for (let col = 0; col < 3; col++) { 
                const span = document.createElement("span");
                span.className = "block";

                if (pattern[row][col] === 1) {
                    span.classList.add('colored');
                }
                digitContainer.appendChild(span);
            }
            digitContainer.appendChild(document.createElement("br")); 
        }

        container.appendChild(digitContainer); 
    }
}

function answerCheck(){
    let answer = document.getElementById('answer').value;
    let checkresult = document.getElementById('check-result');
    if(parseInt(answer)===parseInt(resultStr)){
        checkresult.textContent = "Відповідь правильна!";
        checkresult.style.color = "green"; 
    }
    else{
        checkresult.textContent = "Помилка";
        checkresult.style.color = "red"; 
    }
    
}

const input = document.getElementById('answer');
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        answerCheck()
    }
});

window.onload = function() {
    drawNumber();
};


