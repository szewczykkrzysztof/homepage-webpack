import '../scss/main.scss';
import moment from 'moment'

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')
console.log(moment().format('dddd MMMM YYYY, hh:mm:ss'));

const burgerButton = document.querySelector(".burger--js"); //tworze zmienna podłączoną do ikony hamburgera

/*przypisuję do przycisku akcję na klik
tworzę zmienną zawierającą nawigację*/

burgerButton.addEventListener("click", () => {
  const topMenu = document.querySelector(".navigation--js");
  console.log(topMenu);
  topMenu.classList.toggle("navigation--mobile");
});