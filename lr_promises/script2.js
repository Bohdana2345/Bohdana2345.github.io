// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let res = num > 10? 'Число більше 10' : 'Число менше або дорівнює 10';
//         resolve(`${res}`);
//     },1000);
//     });
    
// promise
//     .then((message) => {
//         showLoader(false);
//         document.getElementById('result').innerText = message;
//     })
//     .catch((error) => {
//         showLoader(false);
//         document.getElementById('result').innerText = error;
//     });


async function checkNumber(num){
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve('Число більше 10');
        } else if (num <= 10) {
            resolve('Число менше або дорівнює 10');
        } else {
            reject(new Error('Невідоме значення!👁️👄👁️!👁️👄👁️!👁️👄👁️!👁️👄👁️!'));
        }
    });
}

checkNumber('t').then(result => document.getElementById('result').innerText = result).catch (error => document.getElementById('result').innerText=`${error}`)

    