import axios from "axios";

async function getWeatherData(cityName: string) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=da923a70663b4e097f43a08ac7be4da2&lang=pt_br&units=metric`
    const response = await axios.get(url);
    console.log(response);
    
  } catch (error) {
    console.log(error);
    
  }
}

export default getWeatherData;