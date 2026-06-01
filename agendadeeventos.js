const evento = new Date("2026-08-15");
const hoje = new Date();

let anos = evento.getFullYear() - hoje.getFullYear();
let meses = evento.getMonth() - hoje.getMonth();
let dias = evento.getDate() - hoje.getDate();

document.getElementById("anos").textContent = anos;
document.getElementById("meses").textContent = meses;
document.getElementById("dias").textContent = dias;