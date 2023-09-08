export interface WeatherData {
  id: number;
  weather: Weather[];
  main: Main;
  wind: Wind;
  sys: Sys;
  name: string;
  base: string;
  rain: Rain;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}
interface Wind {
  speed: number;
  deg: number;
  gust: number;
}
interface Rain {
  '1h': number;
}
interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
export interface Coord {
  longitude: number;
  latitude: number;
}
