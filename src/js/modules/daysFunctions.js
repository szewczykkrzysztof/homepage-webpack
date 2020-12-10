// funkcja zwracająca skrót polskiego dnia tygodnia dla zadanej daty
// parametrem wejściowym jest obiekt zawierający datę zwracany przez funckję newDate();
export function polishWeekDay(entryDate) {
  // definiuję tablicę z polskimi dniami tygodnia
  const polishDay = ["Nie", "Pon", "Wto", "Śro", "Czw", "Pią", "Sob"];
  // pobieram numer dnia tygodnia i podstawiam go jako index do tablicy z polskimi dniami tygodnia
  var weekDay = polishDay[entryDate.getDay()];
  // zwracam jako wynik działąnia funkcji wartość polskiego dnia tygonia
  return weekDay;
}

// funkcja zwracająca polską datę w formacie DzieńTygodania, DD-MM-RRRR
export function polishDate(entryDate) {
  var inputDate = new Date(entryDate);
var options = {
  day: "numeric",
  year: "numeric",
  weekday: 'long',
  month: 'long'
}
var polishFullDate = Intl.DateTimeFormat('pl', options).format(inputDate);
console.log(polishFullDate);
}