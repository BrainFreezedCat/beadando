const bandak = [
  "Metallica",
  "Slayer",
  "Megadeth",
  "Anthrax",
  "Exodus",
  "Kreator",
  "Testament",
  "Sodom",
  "Accept",
  "Slipknot",
  "Savatage",
  "The Cost",
  "Lamb of God",
  "Judas Priest",
  "Iron Maiden",
  "Avanged Sevenfold",
  "System of a Down",
  "Van Halen",
  "Dream Theater",
  "Sepultura",
  "Overkill",
  "Archaic",
];

function randomBanda() {
  const randomIndex = Math.floor(Math.random() * bandak.length)+ 1;
  const randomBand = bandak[randomIndex];
  document.getElementById("ide").textContent = "${randomBand}";
}
document.getElementById("gomb").addEventListener("click", randomBanda);
