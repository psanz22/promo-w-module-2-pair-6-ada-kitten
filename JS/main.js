'use strict';

//EJERCICIO 1 y 2: MOSTRAR LAS CARTAS DE LOS GATOS DESDE EL FICHERO JS:

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

// const cardOne = `<li class="card js-card-1">
// <article>
//   <img
//     class="card_img"
//     src=${imageCardOne}
//     alt="siames-cat"
//   />
//   <h3 class="card_title">${nameCardOne}</h3>
//   <h4 class="card_race">${raceCardOne}</h4>
//   <p class="card_description">
//     ${descriptionCardOne}
//   </p>
// </article>
// </li>`;

// const cardTwo = `<li class="card js-card-2">
// <article>
//   <img
//     class="card_img"
//     src=${imageCardTwo}
//     alt="siames-cat"
//   />
//   <h3 class="card_title">${nameCardTwo}</h3>
//   <h4 class="card_race">${raceCardTwo}</h4>
//   <p class="card_description">
//     ${descriptionCardTwo}
//   </p>
// </article>
// </li>`;

// const cardThree = `<li class="card js-card-3">
// <article>
//   <img
//     class="card_img"
//     src=${imageCardThree}
//     alt="siames-cat"
//   />
//   <h3 class="card_title">${nameCardThree}</h3>
//   <h4 class="card_race">${raceCardThree}</h4>
//   <p class="card_description">
//     ${descriptionCardThree}
//   </p>
// </article>
// </li>`;

// list.innerHTML = cardOne + cardTwo + cardThree;

//EJERCICIO 9: CREAR UN ARRAY DE OBJETOS. PASARLE A LA FUNCIÓN RENDERKITTEN EL ARRAY COMO PARÁMETRO:


const kittenDataOne = {
  image: imageCardOne,
  name: nameCardOne,
  desc: descriptionCardOne,
  race: raceCardOne,
};
const kittenDataTwo = {
  image: imageCardTwo,
  name: nameCardTwo,
  desc: descriptionCardTwo,
  race: raceCardTwo,
};
const kittenDataThree = {
  image: imageCardThree,
  name: nameCardThree,
  desc: descriptionCardThree,
  race: raceCardThree,
};
const kittenDataFour = {
  image: 'https://pics.craiyon.com/2023-07-03/2ea2ab5588c04c6785b0c35cb7a75eeb.webp',
  name: 'LADY BALLANTINES',
  desc: 'Es una gatita un poco alcohólica pero muy maja si te acercas a conocerla.',
  race: 'Atigrada',
};

const kittenDataList = [kittenDataOne, kittenDataTwo, kittenDataThree, kittenDataFour];

// AQUÍ CREAMOS LA FUNCIÓN CON BUCLES Y CON UN ARRAY DE OBJETOS

function renderKittenList(kittenDataList) {
    for(const kitten of kittenDataList){
     list.innerHTML += `<li class="card js-card-3">
   <article>
     <img
       class="card_img"
       src= ${kitten.image}
       alt="siames-cat"
     />
     <h3 class="card_title">${kitten.name}</h3>
     <h4 class="card_race">${kitten.race}</h4>
     <p class="card_description">
       ${kitten.desc}
     </p>
   </article>
   </li>`;
      
    }
}
renderKittenList(kittenDataList);

// function renderKitten(object) {
//   const cardList = `<li class="card js-card-3">
//   <article>
//     <img
//       class="card_img"
//       src= ${object.image}
//       alt="siames-cat"
//     />
//     <h3 class="card_title">${object.name}</h3>
//     <h4 class="card_race">${object.race}</h4>
//     <p class="card_description">
//       ${object.desc}
//     </p>
//   </article>
//   </li>`;
//   return cardList;
// }

// list.innerHTML +=
//   renderKitten(kittenDataList[0]) +
//   renderKitten(kittenDataList[1]) +
//   renderKitten(kittenDataList[2]) +
//   renderKitten(kittenDataList[3]);

// EJERCICIO 3: ESTABLECER FILTROS EN EL BUSCADOR DE GATOS MANIPULANDO
//EL VALUE DEL INPUT DESCRIPCIÓN A MANO (NO SABÍAMOS EVENTOS TODAVÍA)


// const card1 = document.querySelector('.js-card-1');
// const card2 = document.querySelector('.js-card-2');
// const card3 = document.querySelector('.js-card-3');

// if (descriptionCardOne.includes(descriptionText)) {
//   card2.classList.add('hidden');
//   card3.classList.add('hidden');
// } else if (descriptionCardTwo.includes(descriptionText)) {
//   card1.classList.add('hidden');
//   card3.classList.add('hidden');
// } else if (descriptionCardThree.includes(descriptionText)) {
//   card1.classList.add('hidden');
//   card2.classList.add('hidden');
// } else {
//   //console.log('Lo sentimos, ningún gato cumple con esos criterios');
// }

//AHORA VAMOS A ESTABLECER LOS MISMOS FILTROS PERO YA UTILIZANDO BUCLES

const inputDescription = document.querySelector('.js_in_search_desc');


function filterKitten(event) {
  event.preventDefault();
  const descriptionText = inputDescription.value;
for (const kitten of kittenDataList) {
if(kitten.desc.includes(descriptionText)){
  list.innerHTML = `<li class="card js-card-3">
  <article>
    <img
      class="card_img"
      src= ${kitten.image}
      alt="siames-cat"
    />
    <h3 class="card_title">${kitten.name}</h3>
    <h4 class="card_race">${kitten.race}</h4>
    <p class="card_description">
      ${kitten.desc}
    </p>
  </article>
  </li>`;
}else kitten.classList.add('hidden');
}

};

inputDescription.addEventListener('input', filterKitten);

//EJERCICIO 4:AÑADIR GATOS DESDE EL FORMULARIO Y DEVOLVER MENSAJE DE ERROR SI
//FALTA ALGUN CAMPO

const buttonAdd = document.querySelector('.js-btn-add');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');

buttonAdd.addEventListener('click', () => {
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = 'Uy, parece que has olvidado algo!';
  } else {
  }
});

//EJERCICIO 5: CERRAR EL FORMULARIO DE AÑADIR GATOS CON EL BOTÓN CANCELAR
//EJERCICIO 6: ABRIR Y CERRAR EL FORMULARIO DE AÑADIR GATOS CON EL BOTÓN +

const buttonCancel = document.querySelector('.js-button-cancel');
const form = document.querySelector('.js-form');
const buttonPlus = document.querySelector('.js-button-plus');

buttonCancel.addEventListener('click', (event) => {
  event.preventDefault();
  form.classList.add('collapsed');
});

function showNewCatForm() {
  form.classList.remove('collapsed');
}
function hideNewCatForm() {
  form.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (form.classList.contains('collapsed')) {
    showNewCatForm(form);
  } else {
    hideNewCatForm(form);
  }
}

buttonPlus.addEventListener('click', handleClickNewCatForm);

//EJERCICIO 6:AÑADIR UN NUEVO GATO RELLENANDO EL FORMULARIO Y HACIENDO
//  CLICK EN EL BOTÓN AÑADIR DEL FORMULARIO

const inputImage = document.querySelector('.js-input-photo');
const inputNameCat = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-race');
const inputDescr = document.querySelector('.js-input-desc');

function addNewKitten(event) {
  event.preventDefault();
  const inputImageValue = inputImage.value;
  const inputNameValue = inputNameCat.value;
  const inputRaceValue = inputRace.value;
  const inputDescrValue = inputDescr.value;
  const cardFour = `<li class="card js-card-3">
<article>
  <img
    class="card_img"
    src=${inputImageValue}
    alt="siames-cat"
  />
  <h3 class="card_title">${inputNameValue}</h3>
  <h4 class="card_race">${inputRaceValue}</h4>
  <p class="card_description">
    ${inputDescrValue}
  </p>
</article>
</li>`;
  list.innerHTML += cardFour;
}

buttonAdd.addEventListener('click', addNewKitten);

//EJERCICIO 7: ESTABLECER FILTROS EN EL BUSCADOR DE GATOS (INPUT DESCRIPCION)
//CON FUNCIONES Y EVENTOS

// const filterKitten = (event) => {
//   event.preventDefault();
//   const input_search_desc = document.querySelector('.js_in_search_desc');
//   const descrSearchText = input_search_desc.value;
//   if (descriptionCardOne.includes(descrSearchText)) {
//     card2.classList.add('hidden');
//     card3.classList.add('hidden');
//     list.innerHTML = cardOne;
//   }
//   if (descriptionCardTwo.includes(descrSearchText)) {
//     card1.classList.add('hidden');
//     card3.classList.add('hidden');
//     list.innerHTML = cardTwo;
//   }
//   if (descriptionCardThree.includes(descrSearchText)) {
//     card1.classList.add('hidden');
//     card2.classList.add('hidden');
//     list.innerHTML = cardThree;
//   }
//   if (
//     descriptionCardOne.includes(descrSearchText) &&
//     descriptionCardTwo.includes(descrSearchText) &&
//     descriptionCardThree.includes(descrSearchText)
//   ) {
//     list.innerHTML = cardOne + cardTwo + cardThree;
//   }
// };
// const buttonSearch = document.querySelector('.js-button-search');
// buttonSearch.addEventListener('click', filterKitten);

//EJERCICIO 8: CONVERTIR CADA GATITO EN UN OBJETO


// renderKitten(kittenDataOne);
// renderKitten(kittenDataTwo);
// renderKitten(kittenDataThree);
// renderKitten(kittenDataFour);