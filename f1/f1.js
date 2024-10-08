const APIAdress = "https://archive-api.open-meteo.com/v1/archive";
async function f1(lat, long, timeStr) {
  const url = new URL(APIAdress);
  url.searchParams.append("latitude", lat);
  url.searchParams.append("longitude", long);
  url.searchParams.append("start_date", timeStr);
  url.searchParams.append("end_date", timeStr);
  url.searchParams.append("daily", "temperature_2m_mean");

  const response = await fetch(url);
  const data = await response.json();
  return Math.floor(data.daily.temperature_2m_mean[0]);
}

module.exports = f1;
