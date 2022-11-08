// Conditional Execution
// Switch Case

let cuacaHariIni = prompt('Bagaimana cuaca hari ini ?');

switch(cuacaHariIni) {
  case "mendung":
    alert("Jangan lupa bawa payung");
    break;
  case "panas":
    alert("Jangan lupa berjemur");
    break;
  case "berawan":
    alert("Silahkan main di luar");
    break;
  default:
    alert("Cuaca kamu gak jelas");
    break;
}

const projectTitle = document.querySelector("#project-title");
projectTitle.textContent = "Title Baru dari JS File"