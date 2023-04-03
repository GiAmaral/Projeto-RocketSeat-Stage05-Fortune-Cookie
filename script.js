let [closedCookieSection, openedCookieSection] =
  document.querySelectorAll(".fortune-cookie");

let message = document.querySelector(".message p");

let messageArray = [
  "Espere pelo mais sábio dos conselhos: o tempo.",
  "Amizade e Amor são coisas que se unem num piscar de olhos.",
  "O amor está sempre mais próximo do que você imagina.",
  "Realize o óbvio, pense no improvável e conquiste o impossível.",
  "A inspiração vem dos outros. A motivação vem de dentro de nós.",
  "Nós somos o que pensamos.",
  "Não há que ser forte. Há que ser flexível.",
  "São os nossos amigos que nos ensinam as mais valiosas lições.",
  "A sorte favorece a mente bem preparada.",
  "São os nossos amigos que nos ensinam as mais valiosas lições.",
];

function openAnotherCookie() {
  closedCookieSection.classList.remove("hide");

  openedCookieSection.classList.add("hide");
}

function openFortuneCookie() {
  openedCookieSection.classList.remove("hide");

  closedCookieSection.classList.add("hide");

  let randomMessage =
    messageArray[Math.floor(Math.random() * messageArray.length)];

  message.textContent = randomMessage;
}
