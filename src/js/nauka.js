const firstName = "Krzysiek";
const age = 42;
console.log(`Mam na imię ${firstName} i mam ${age} lata`);
const injection = document.querySelector(".notes-article--js");
console.log(injection);
injection.innerHTML = `<h3>Witam tu ${firstName}</h3> To jest artykuł wygenerowany poprzez wstrzyknięcie
 tego tekstu do kodu DOM za pomocą funkcji innerHTML`;
console.log(injection);

function myName(name, age) {
  return `Nazywam się ${name} i mam ${age} lat`;
}

function calculate(number) {
  square = number * number;
  return `Kwadrat liczby ${number} to ${square}`;
}

console.log(calculate(5));

console.log(myName(firstName, age));

console.log(myName("Tymon", 48));

const burgerButton = document.querySelector(".burger--js"); //tworze zmienna podłączoną do ikony hamburgera

/*przypisuję do przycisku akcję na klik
tworzę zmienną zawierającą nawigację*/

burgerButton.addEventListener("click", () => {
  const topMenu = document.querySelector(".navigation--js");
  console.log(topMenu);
  topMenu.classList.toggle("navigation--mobile");
});
