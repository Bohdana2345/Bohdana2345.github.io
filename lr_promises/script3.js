function showLoader(show) {
    const loader = document.getElementById('loader');
    loader.style.display = show ? 'block' : 'none';
}
showLoader(true);

async function randomNumber(){
    let time = parseInt((Math.floor(Math.random() * 3) + 1)*1000);
    // console.log(time);
    let num = Math.floor(Math.random() * 100) + 1;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num);
            showLoader(false);
        }, time);
    });
    }

randomNumber().then(num => document.getElementById('result').innerText = num).catch (error => document.getElementById('result').innerText=`${error}`)