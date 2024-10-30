function showLoader(show) {
    const loader = document.getElementById('loader');
    loader.style.display = show ? 'block' : 'none';
}
showLoader(true);

async function compareNumbers(num1, num2) {
    if (num1 > num2) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Перше число більше');
                showLoader(false);
            }, 1000);
        });
    } else if (num1 < num2) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Друге число більше');
                showLoader(false);
            }, 1000);
        });
    }
    else if (num1 === num2) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Числа рівні');
                showLoader(false);
            }, 1000);
        });
    }
    else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('Невідоме значення!👁️👄👁️!👁️👄👁️!👁️👄👁️!👁️👄👁️!'));
                showLoader(false);
            }, 1000);
        });
    }
}


compareNumbers('4',4).then(num => document.getElementById('result').innerText = num).catch (error => document.getElementById('result').innerText=`${error}`)