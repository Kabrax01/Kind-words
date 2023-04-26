"use strict"

let kindWordsArray = ["Dziękuję że jestes", "Uśmiechnij się", "Dasz radę", "Jesteś piękna", "Tęsknię za Tobą :*", "Kocham Cię", "Lubię Twoje towarzystwo", "Uwielbiam z Tobą rozmawiać", "Możesz zawsze na mnie liczyć", "Jesteś najlepszą żoną na świecie", "Wierzę w Ciebie", "Ufam Ci ponad życie"];

const display = document.querySelector("#paragraph");
const body = document.querySelector("body");

const randomGenerator = Math.floor(Math.random() * kindWordsArray.length) + 1; 

body.addEventListener("click", () => {
  display.textContent = kindWordsArray[randomGenerator]
})