const api_url = 'https://moroccostats.herokuapp.com/stats/coronavirus/countries/morocco';

async function getData() {
  const response = await fetch(api_url);
  const data = await response.json();

  let tConfirmed = data.totalcases;
  let tActive = data.activecases;
  let tDeaths = data.totaldeaths;
  let tRecovered = data.recovered;

  document.getElementById("tC").textContent = tConfirmed;
  document.getElementById("tA").textContent = tActive;
  document.getElementById("tD").textContent = tDeaths;
  document.getElementById("tR").textContent = tRecovered;
}

getData();

const regi_url = "https://moroccostats.herokuapp.com/stats/coronavirus/countries/morocco/regions";

async function getRegions() {
  const response = await fetch(regi_url);
  const data = await response.json();

  let Fsmeknes = data.Fsmeknes;
  let MarrakechSafi = data.MarrakechSafi;
  let RabatSalKenitra = data.RabatSalKenitra;
  let TangerTetouanAlHoceima = data.TangerTetouanAlHoceima;
  let CasaSettat = data.CasaSettat;
  let GuelmimOuedNoun = data.GuelmimOuedNoun;
  let Oriental = data.Oriental;
  let SoussMassa = data.SoussMassa;
  let BeniMellalKhnifra = data.BeniMellalKhnifra;

  document.getElementById("Fsmeknes").textContent = Fsmeknes;
  document.getElementById("MarrakechSafi").textContent = MarrakechSafi;
  document.getElementById("RabatSalKenitra").textContent = RabatSalKenitra;
  document.getElementById("TangerTetouanAlHoceima").textContent = TangerTetouanAlHoceima;
  document.getElementById("CasaSettat").textContent = CasaSettat;
  document.getElementById("GuelmimOuedNoun").textContent = GuelmimOuedNoun;
  document.getElementById("Oriental").textContent = Oriental;
  document.getElementById("SoussMassa").textContent = SoussMassa;
  document.getElementById("BeniMellalKhnifra").textContent = BeniMellalKhnifra;
}

getRegions();
