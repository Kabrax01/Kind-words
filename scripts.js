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
  "Twój telefon właśnie się zarumienił ;P",
  "Twój miś Cię kocha z całych sił :*",
  "A co to za śliczne oczka tutaj patrzą?",
  "Nie patrz w telefon... tylu ludzi mozesz obdarzyć swoim spojrzeniem",
];

let emojiArray = [
  "❤️",
  "🥰",
  "💏",
  "💞",
  "💓",
  "😍",
  "💕",
  "😘",
  "💘",
  "❤️‍🔥",
  "💗",
  "🫶",
  "❣️",
  "😚"
];

const display = document.querySelector("#paragraph");
const emoji = document.querySelector("#span");
const body = document.querySelector("body");

let wordsArrCopy = [...kindWordsArray];
let emojiArrCopy = [...emojiArray];

function generator(array) {
  return Math.floor(Math.random() * array.length);
}

body.addEventListener("click", () => {
  if (wordsArrCopy.length == 0) {
    wordsArrCopy = [...kindWordsArray];
  }

  if (emojiArrCopy.length == 0) {
    emojiArrCopy = [...emojiArray];
  }

  const wordNum = generator(wordsArrCopy);
  const emojiNum = generator(emojiArrCopy);

  display.textContent = wordsArrCopy[wordNum];
  emoji.textContent = emojiArrCopy[emojiNum];

  wordsArrCopy.splice(wordNum, 1);
  emojiArrCopy.splice(emojiNum, 1);

  console.log(wordsArrCopy);
});
