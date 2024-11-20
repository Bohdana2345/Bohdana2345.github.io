const header = document.querySelector('header');
const section = document.querySelector('section');

const requestURL = 'https://semegenkep.github.io/json/example.json'
const request = new XMLHttpRequest();
request.open('GET', requestURL)
request.responseType = 'json'
request.send()

request.onload = function() {
    const superHeroes = request.response
    populateHeader(superHeroes)
    showHeroes(superHeroes)
    // console.log(superHeroes) - мяу це не коментар чата джпт
}

function populateHeader(array) {
    // header.textContent = '7'; мяу це не коментар чата джпт
    // const keys = Object.keys(array);
    // const firstKey = keys[0];         
    // const firstElement = array[firstKey];
    // console.log(firstElement) мяу це не коментар чата джпт

    const h1 = document.createElement('h1');
    h1.textContent = array.squadName;
    header.appendChild(h1);

    // const h1 = document.createElement('h1');
    // h1.textContent = firstElement;
    // header.appendChild(h1);

    // const h2 = document.createElement('h2');
    const p = document.createElement('p');
    p.textContent = `Hometown: ${array.homeTown} // Formed: ${array.formed}`;
    // const secondKey = keys[1];
    // const thirdKey = keys[2];
    // const secondPair = `${formatKey(secondKey)}: ${array[secondKey]}`;
    // const thirdPair = `${formatKey(thirdKey)}: ${array[thirdKey]}`;   - мяу це не коментар чата джпт 
    // p.textContent = `${secondPair} // ${thirdPair}`;
    header.appendChild(p);
}

function showHeroes(array) {
    // const keys = Object.keys(array);
    // const sixthKey = keys[5];    
    // const sixthElement = array[sixthKey][0];
    // console.log(sixthElement);

    // const firstHeroName = array.members[0].name; мяу це не коментар чата джпт
    // console.log(firstHeroName); мяу це не коментар чата джпт


    array.members.forEach(member => {
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
    
        h2.textContent = member.name;
        article.appendChild(h2);
    
        const secretIdentityP = document.createElement('p');
        secretIdentityP.textContent = `Secret Identity: ${member.secretIdentity}`;
        article.appendChild(secretIdentityP);
    
        const ageP = document.createElement('p');
        ageP.textContent = `Age: ${member.age}`;
        article.appendChild(ageP);
    
        const powersP = document.createElement('p');
        powersP.textContent = `Superpowers:`;
        article.appendChild(powersP);
    
        const ul = document.createElement('ul');
        member.powers.forEach(power => {
            const li = document.createElement('li');
            li.textContent = power;
            ul.appendChild(li);
        });
        article.appendChild(ul);
    
        section.appendChild(article);
    });
    

    // header.textContent = '7';  мяу це все не коментарі чата джпт
    
//     const keys = Object.keys(array);
//     const firstKey = keys[0];         
//     const firstElement = array[firstKey];
//     // console.log(firstElement)

//     const h1 = document.createElement('h1');
//     h1.textContent = firstElement;
//     header.appendChild(h1);

//     const formatKey = (key) => key.charAt(0).toUpperCase() + key.slice(1);

//     const p = document.createElement('p');
//     const secondKey = keys[1];
//     const thirdKey = keys[2];
//     const secondPair = `${formatKey(secondKey)}: ${array[secondKey]}`;
//     const thirdPair = `${formatKey(thirdKey)}: ${array[thirdKey]}`;
//     p.textContent = `${secondPair} // ${thirdPair}`;
//     header.appendChild(p);
// }
}