const messages = [
  "1: Nikola, Twój uśmiech rozjaśnia każdy mój dzień.",
  "2: Gdy myślę o Tobie, serce bije szybciej.",
  "3: Jesteś moim powodem do uśmiechu każdego ranka.",
  "4: Twoje oczy mają w sobie cały wszechświat.",
  "5: Jesteś jak ulubiona piosenka – mogę Cię słuchać bez końca.",
  "6: Z Tobą nawet zwykły dzień staje się magiczny.",
  "7: Gdy Cię nie ma, wszystko traci kolor.",
  "8: Jesteś jak ciepły kocyk w chłodny wieczór.",
  "9: Myśl o Tobie ogrzewa mnie bardziej niż słońce.",
  "10: Nikola, jesteś moją codzienną dawką szczęścia.",
  "11: Twoje imię brzmi jak najpiękniejszy wiersz.",
  "12: Przy Tobie czuję się jak w domu.",
  "13: Jesteś najpiękniejszym snem, który stał się rzeczywistością.",
  "14: Twoje słowa mają moc leczenia mojej duszy.",
  "15: Jesteś dla mnie kimś więcej niż tylko miłością.",
  "16: Każdy Twój gest ma dla mnie znaczenie.",
  "17: Nie potrzebuję gwiazd, bo mam Ciebie.",
  "18: Każdy dzień z Tobą to prezent, który kocham rozpakowywać.",
  "19: Twoja obecność koi moje serce.",
  "20: Nikola, jesteś moją definicją piękna.",
  "21: Przy Tobie czas przestaje mieć znaczenie.",
  "22: Jesteś moim szczęściem zamkniętym w ludzkiej postaci.",
  "23: W Twoich oczach widzę cały sens życia.",
  "24: Dziękuję losowi, że postawił Ciebie na mojej drodze."
];

function getCurrentMessage() {
  const hour = new Date().getHours();
  const message = messages[hour % 24];
  const element = document.getElementById("message");

  if (element) {
    element.classList.add("fade");
    setTimeout(() => {
      element.textContent = message;
      element.classList.remove("fade");
    }, 500);
  }
}

getCurrentMessage();
setInterval(getCurrentMessage, 60 * 60 * 1000); // aktualizacja co godzinę