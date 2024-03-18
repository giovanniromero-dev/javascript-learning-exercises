// Selección de elementos del DOM

let mainTitle = document.getElementById('main-title');
console.log(mainTitle);

let buttons = document.getElementsByTagName('button');
console.log(buttons);

let instructionsParagraph = document.getElementsByClassName('instructions');
console.log(instructionsParagraph);

let dinamicLink = document.querySelector('.dinamic-link');
console.log(dinamicLink);

let jumboItems = document.querySelectorAll('.jumbo li');
console.log(jumboItems);

// Manipulación de elementos DOM

mainTitle.innerHTML = 'Título cambiado';

buttons[1].disabled = true;

instructionsParagraph[0].style.color = 'crimson';

dinamicLink.setAttribute('href', 'https://google.com');

let options = ['Windows','MacOs','Linux'];

for(i=0;i<options.length;i++){
    jumboItems[i].innerHTML = options[i];
}

// Creación de elementos en el DOM

let item = document.createElement('li');

item.innerHTML = 'Android';

let jumboList = document.querySelector('.jumbo');

jumboList.appendChild(item);

jumboList.removeChild(jumboItems[1]);

let item2 = document.createElement('li');

item2.innerHTML = 'iOS';

jumboList.replaceChild(item2, jumboItems[0]);

// Eventos en el DOM

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

function toggleModal() {
    if(modal.style.display === 'none') {
        modal.style.display = 'flex';
        overlay.style.display = 'block';
    } else {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }
    
}

let input = document.querySelector('input');

input.addEventListener('input',() => {
    buttons[1].disabled = false;
});

// Manipulación de clases CSS

jumboList.addEventListener('click',() => {
    //jumboList.classList.add('marked'); .remove(<clase-css>)
    jumboList.classList.toggle('marked'); // NO es compatible con internet explorer
});