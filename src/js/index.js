import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const burgerButton = document.querySelector(".burger--js"); //tworze zmienna podłączoną do ikony hamburgera

/*przypisuję do przycisku akcję na klik
tworzę zmienną zawierającą nawigację*/

burgerButton.addEventListener("click", () => {
  const topMenu = document.querySelector(".navigation--js");
  console.log(topMenu);
  topMenu.classList.toggle("navigation--mobile");
});