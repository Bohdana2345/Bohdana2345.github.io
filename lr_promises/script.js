function showLoader(show) {
    const loader = document.getElementById('loader');
    loader.style.display = show ? 'block' : 'none';
}
showLoader(true);

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello world');
    }, 2000);
  });

promise
    .then((message) => {
        showLoader(false);
        document.getElementById('result').innerText = message;
    })
    .catch((error) => {
        showLoader(false);
        document.getElementById('result').innerText = error;
    });




  