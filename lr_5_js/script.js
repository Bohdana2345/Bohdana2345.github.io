let tab;
let tabContent;

window.onload = function() {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for(let i=a; i<tabContent.length; i++)
    {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder'); 
    }
}

document.getElementById('tabs').onclick=function(event) {
    let target = event.target;
    if(target.className=='tab'){
        for(let i=0;i<tab.length;i++){
            if(target==tab[i]){
                showTabsContent(i);
                break
            }
        }
    }
}

function showTabsContent(b){
    if(tabContent[b].classList.contains('hide')){
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.add('hide');
        tabContent[b].classList.add('show');
    }
}

function generate() {
    let rtl = document.getElementById('rtl').value;
    let rtr = document.getElementById('rtr').value;
    let rbr = document.getElementById('rbr').value;
    let rbl = document.getElementById('rbl').value;
    let ttl = document.getElementById('ttl');
    let ttr = document.getElementById('ttr');
    let tbr = document.getElementById('tbr');
    let tbl = document.getElementById('tbl');
    let block = document.getElementById('block');
    let textarea = document.getElementById('textarea');
    
    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;
    
    
    block.style.borderRadius = `${rtl}px ${rtr}px ${rbr}px ${rbl}px`;
    let string = 'border-radius:';
    let corners = [rtl, rtr, rbr, rbl];
    corners.forEach((element, index) => {
        if (element != 0) {
            string += ` ${element}px`;
        } else {
            string += ` 0 `;
        }
    });
    
    textarea.textContent = string + ';';
    }

    let options = document.querySelectorAll('.align');
    let decorations = document.querySelectorAll('.decoration');
    let text = document.getElementById('text-align');
    let text2 = document.getElementById('text-decoration');

    options.forEach(element => {
        element.addEventListener("click", e => {
            options.forEach(el => {
                el.style.border = "1px solid transparent"; 
            });
            element.style.border = "2px solid blue"; 
            text.style.textAlign = `${element.id}`;

        });
    });

    decorations.forEach(element => {
        element.addEventListener("click", e => {
            decorations.forEach(el => {
                el.style.border = "1px solid transparent"; 
            });
            element.style.border = "2px solid blue"; 
            text2.style.textDecoration = `${element.id}`;
        });
    });
    