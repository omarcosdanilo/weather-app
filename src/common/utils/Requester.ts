import axios from "axios";
import { ApiResponse } from "../../interfaces/IApiResponse";

abstract class Requester {
  static async getWeatherData(cityName: string): Promise<ApiResponse> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=da923a70663b4e097f43a08ac7be4da2&lang=pt_br&units=metric`
    try {
      const response = await axios.get(url).then(response => response.data);
      return response;
      
    } catch (error) {
      throw new Error("Houve um problema");
    }
  }

  static async getCapitalsData(capitals: string[]) {
    try {
      const response = await Promise.all(
        capitals.map(capital => axios.get<ApiResponse>(
          `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=da923a70663b4e097f43a08ac7be4da2&lang=pt_br&units=metric`
        ).then(response => response.data))
      );

      return response;
    } catch(error) {
      console.log(error);
    }
  }
}


export default Requester;