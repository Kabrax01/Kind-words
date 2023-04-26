"use strict";

let kindWordsArray = [
  "Dziękuję że jestes",
  "Uśmiechnij się",
  "Dasz radę",
  "Jesteś piękna",
  "Tęsknię za Tobą :*",
  "Kocham Cię",
  "Lubię Twoje towarzystwo",
  "Uwielbiam z Tobą rozmawiać",
  "Możesz zawsze na mnie liczyć",
  "Jesteś najlepszą żoną na świecie",
  "Wierzę w Ciebie",
  "Ufam Ci ponad życie",
  "Jesteś moją ostoją",
  "Oddałbym życie za Ciebie",
  "Zawsze będę stał za Tobą murem",
  "Maleńka... jesteś wielka!",
  "Jestem z Ciebie dumny",
  "Bo jak nie my to kto?",
  "Buziaczek dla Ciebie :*",
  "Cóż to za piękność tutaj spogląda?",
  "Twój telefon właśnie się zarumienił ;P"
];

let emojiArray = ["❤️", "🥰", "💏", "💞", "💓", "😍", "💕", "😘", "💘", "❤️‍🔥", "💗"]

const display = document.querySelector("#paragraph");
const emoji = document.querySelector("#span")
const body = document.querySelector("body");

body.addEventListener("click", () => {
  
  const randomWordGenerator = Math.floor(Math.random() * kindWordsArray.length);
  const randomEmojiGenerator = Math.floor(Math.random() * emojiArray.length);

  display.textContent = kindWordsArray[randomWordGenerator];
  emoji.textContent = emojiArray[randomEmojiGenerator]

  console.log(randomEmojiGenerator);
});
