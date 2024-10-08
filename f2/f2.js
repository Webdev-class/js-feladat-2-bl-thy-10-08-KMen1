/*
Készítsd el az előző feladat azon változatát ahol megadjuk az óraszámot is.
Csak az adott órára vonatkozó hőmérséklettel térjen vissza a függvény.
*/

const locations = require("../locations.json");
const APIAdress = "https://archive-api.open-meteo.com/v1/archive?";

async function f2(lat, long, timeStr, hour) {
  const url = new URL(APIAdress);
  url.searchParams.append("latitude", lat);
  url.searchParams.append("longitude", long);
  url.searchParams.append("start_date", timeStr);
  url.searchParams.append("end_date", timeStr);
  url.searchParams.append("hourly", "temperature_2m");

  const response = await fetch(url);
  const data = await response.json();
  return data.hourly.temperature_2m[hour];
}
module.exports = f2;
