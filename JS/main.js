'use strict';

const list = document.querySelector('.js-list');

//Card one
const imageCardOne = new URL('https://dev.adalab.es/gato-siames.webp');
const nameCardOne = 'Anastasio'.toUpperCase();
const descriptionCardOne = `Porte elegante, su patrón de color tan característico y sus ojos
de un azul intenso, pero su historia se remonta a Asía al menos
hace 500 años, donde tuvo su origen muy posiblemente.`;
const raceCardOne = 'Siamés';

//Card two
const imageCardTwo = new URL('https://dev.adalab.es/sphynx-gato.webp');
const nameCardTwo = 'Fiona'.toUpperCase();
const descriptionCardTwo = `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
hasta con pinta de alienígena han llegado a definir a esta raza
gatuna que se caracteriza por la «ausencia» de pelo.`;
const raceCardTwo = 'Sphynx';

//Card three
const imageCardThree = new URL('https://dev.adalab.es/maine-coon-cat.webp');
const nameCardThree = 'Cielo'.toUpperCase();
const descriptionCardThree = `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
bella mirada se ha convertido en una de sus señas de identidad.
Sus ojos son grandes y las orejas resultan largas y en punta.`;
const raceCardThree = 'Maine Coon';

const cardOne = `<li class="card js-card-1">
<article>
  <img
    class="card_img"
    src=${imageCardOne}
    alt="siames-cat"
  />
  <h3 class="card_title">${nameCardOne}</h3>
  <h4 class="card_race">${raceCardOne}</h4>
  <p class="card_description">
    ${descriptionCardOne}
  </p>
</article>
</li>`;


const cardTwo = `<li class="card js-card-2">
<article>
  <img
    class="card_img"
    src=${imageCardTwo}
    alt="siames-cat"
  />
  <h3 class="card_title">${nameCardTwo}</h3>
  <h4 class="card_race">${raceCardTwo}</h4>
  <p class="card_description">
    ${descriptionCardTwo}
  </p>
</article>
</li>`;

const cardThree = `<li class="card js-card-3">
<article>
  <img
    class="card_img"
    src=${imageCardThree}
    alt="siames-cat"
  />
  <h3 class="card_title">${nameCardThree}</h3>
  <h4 class="card_race">${raceCardThree}</h4>
  <p class="card_description">
    ${descriptionCardThree}
  </p>
</article>
</li>`;

list.innerHTML = cardOne + cardTwo + cardThree;

const inputDescription = document.querySelector('.js_in_search_desc');
const descriptionText = inputDescription.value;
const card1 = document.querySelector('.js-card-1');
const card2 = document.querySelector('.js-card-2');
const card3 = document.querySelector('.js-card-3');


if(descriptionCardOne.includes(descriptionText) ) {
 
  }else {
    card1.classList.add('hidden');
  }
  
  if(descriptionCardTwo.includes(descriptionText) ) {
  }else {
    card1.classList.add('hidden');
  }
  
  if(descriptionCardThree.includes(descriptionText) ) {
  }else {
    card1.classList.add('hidden');
  }

 