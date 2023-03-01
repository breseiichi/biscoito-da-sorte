const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const imgCookie = document.querySelector("#cookie")
const btnReset = document.querySelector("#btnReset")
const cookieBg = document.querySelector("body")
const cookiePhrase = document.querySelector("#phrases")
const phrases = [
  "A vida trará coisas boas se tiver paciência.",
  "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Siga os bons e aprenda com eles.",
  "O bom-senso vale mais do que muito conhecimento.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
  "Surpreender e ser surpreendido é o segredo do amor.",
  "A sorte favorece a mente bem preparada.",
  "Você é do tamanho do seu sonho.",
  "A maior barreira para o sucesso é o medo do fracasso.",
  "O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.",
  "O insucesso é apenas uma oportunidade para recomeçar de novo com mais experiência.",
  "Você sempre será a sua melhor companhia!",
  "Acredite em milagres, mas não dependa deles.",
  "Conhecimento é a única virtude e ignorância é o único vício.",
  "Todas as coisas são difíceis antes de se tornarem fáceis."
]

imgCookie.addEventListener('click', toClick)
btnReset.addEventListener('click', toResetClick)

function toClick(e) {
  e.preventDefault()
  toggleScreen()
  cookiePhrase.innerText = phrases[Math.round(Math.random() * 10)]
  cookieBg.style.background = "linear-gradient(25deg, #e9cbe5 0%, #8a277d 100%)"
}

function toResetClick (event) {
  toggleScreen()
  cookieBg.style.background = "linear-gradient(45deg, #8a277d 0%, #e9cbe5 100%)"
}


function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

