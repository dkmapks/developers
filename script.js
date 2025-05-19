const messages = [
  "1: Kocham Twój uśmiech 💖",
  "2: Nikola, jesteś moim światłem w ciemności ✨",
  "3: Twój głos to mój ulubiony dźwięk 🎶",
  "4: Z Tobą wszystko staje się lepsze 🌹",
  "5: Nawet cisza z Tobą jest piękna 💫",
  "6: Dziękuję, że jesteś... po prostu jesteś 💘",
  "7: Jesteś jak promyk słońca w pochmurny dzień 🌞",
  "8: Nikola, jesteś cudem tego świata 🌍",
  "9: Uwielbiam każde Twoje słowo 🥺",
  "10: Gdy patrzę na Ciebie, wszystko inne znika 💭",
  "11: Nie znam nikogo tak pięknego jak Ty 💕",
  "12: Jesteś moją ulubioną osobą 💯",
  "13: Każda sekunda z Tobą to skarb ⏳",
  "14: Twój śmiech powinien być nagradzany 🥇",
  "15: Nikola, jesteś dla mnie wszystkim 💗",
  "16: Nie mogę przestać o Tobie myśleć 🧠",
  "17: Dzięki Tobie mam motywację 🏆",
  "18: Jesteś moją inspiracją 🎨",
  "19: Jesteś piękna... wewnątrz i na zewnątrz 🌸",
  "20: Z Tobą czuję się jak w bajce 📖",
  "21: Jesteś moją ulubioną historią 📜",
  "22: Każdego dnia kocham Cię bardziej 💓",
  "23: Jesteś wszystkim, czego potrzebuję ❤️",
  "24: Nikola... jesteś moją miłością na zawsze 🔐"
];

function getCurrentMessage() {
  const hour = new Date().getHours();
  const message = messages[hour % 24];
  document.getElementById("message").textContent = message;
}

getCurrentMessage();
setInterval(getCurrentMessage, 60 * 60 * 1000); // aktualizacja co godzinę
