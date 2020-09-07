import '../scss/main.scss';
import moment from 'moment';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀');
console.log(moment().format('DD MMMM YYYY, hh:mm:ss'));

const burgerButton = document.querySelector(".burger--js"); //tworze zmienna podłączoną do ikony hamburgera

/*przypisuję do przycisku akcję na klik
tworzę zmienną zawierającą nawigację*/

burgerButton.addEventListener("click", () => {
  const topMenu = document.querySelector(".navigation--js");
  console.log(topMenu);
  topMenu.classList.toggle("navigation--mobile");
});

const whatDateButton = document.querySelector(".action--js");
console.log(whatDateButton);

const myAction = () => {
    const newHeading = document.querySelector(".actionHeading--js");
    newHeading.innerHTML = `Dzisiaj jest ${moment().format('dddd DD MMMM YYYY, [godzina] hh:mm')}`;
}

 /*  tworzę funkcję strzałkową myAction
  pobieram zawartość klasy i przypisuję do zmiennej
  wstrzykuję do zmiennej nową treść, zawartość jest automatycznie podmieniana w klasie actionHeading--j
*/

whatDateButton.addEventListener("click", myAction); //wywołuje funkcję myAction poprzez akcję click na elemencie myButton

  //moment().format('DD MMMM YYYY, hh:mm:ss')