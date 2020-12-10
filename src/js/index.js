import '../scss/main.scss';
import moment from 'moment';
import { polishDate } from "./modules/daysFunctions.js";


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


const newHeading = document.querySelector(".actionHeading--js");

newHeading.innerHTML = `Witam cię na mojej stronie o godzinie ${moment().format('hh:mm')}`;

const whatDate = document.querySelector(".action--js");
console.log(whatDate);

whatDate.innerHTML = `Dzisiaj jest ${polishDate()}`;


 /*  tworzę funkcję strzałkową myAction
  pobieram zawartość klasy i przypisuję do zmiennej
  wstrzykuję do zmiennej nową treść, zawartość jest automatycznie podmieniana w klasie actionHeading--j
*/
