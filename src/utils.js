
const getTempInFahrenheit = async () => {
  const apiEndpoint =
    "https://api.open-meteo.com/v1/forecast?latitude=-41.2865&longitude=174.7762&hourly=temperature_2m";
  // const apiEndpoint = "/forecast";
  const tempInC = await fetch(apiEndpoint);

  const response = await tempInC.json();
  const currentTemp = response.hourly.temperature_2m[0];
  const tempInF = (currentTemp * 9) / 5 + 32;

  return tempInF;
};

export {  getTempInFahrenheit };
