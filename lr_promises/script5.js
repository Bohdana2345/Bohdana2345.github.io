function showLoader(show) {
    const loader = document.getElementById('loader');
    loader.style.display = show ? 'block' : 'none';
}
showLoader(true);

let promise_array = [
 new Promise((resolve) =>{
    setTimeout(()=>{
        let res = (Math.random() * 10) + 1;
        resolve(res)
    }, 1000)
    
 }),
 new Promise((resolve) =>{
    setTimeout(()=>{
        let res = (Math.random() * 10) + 1;
        resolve(res)
    }, 2000)
    
 }),
 new Promise((resolve) =>{
    setTimeout(()=>{
        let res = (Math.random() * 10) + 1;
        resolve(res)
    }, 3000)
    
 })
]

Promise.all(promise_array).then(results => {
    let suma = 0;
    results.forEach(value => {
        suma += value;
    });
    document.getElementById('result').innerText = `${suma}`
    showLoader(false);
})
.catch (error => document.getElementById('result').innerText=`Error: ${error}`)