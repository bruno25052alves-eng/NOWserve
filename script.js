let respostas = {};
let pontuacao = 0;

function responder(q, r, btn) {
  respostas[q] = r;

  let botoes = btn.parentElement.querySelectorAll("button");
  botoes.forEach(b => b.style.background = "#00f5ff");

  btn.style.background = "#00ff88";
}

function mostrarResultado() {
  pontuacao = 0;

  if (respostas.q1 === "android") pontuacao++;
  if (respostas.q2 === "linus") pontuacao++;
  if (respostas.q3 === "ios") pontuacao++;

  document.getElementById("resultadoQuiz").innerHTML =
    `Você fez <b>${pontuacao}/3</b>`;
}

/* PROGRESS */
window.onscroll = function () {
  let scroll = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (scroll / height) * 100;

  document.getElementById("progressBar").style.width = scrolled + "%";

  document.getElementById("topButton").style.display =
    scroll > 300 ? "block" : "none";
};

function voltarTopo() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* sidebar ativa */
let sections = document.querySelectorAll("section");
let links = document.querySelectorAll(".sidebar a");

window.addEventListener("scroll", () => {
  let pos = window.scrollY + 200;

  sections.forEach(sec => {
    if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
      links.forEach(l => l.classList.remove("active"));
      document.querySelector(`.sidebar a[href="#${sec.id}"]`)
        ?.classList.add("active");
    }
  });
});
