export type WeatherData = {
  name: string;
  timezone: number;
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
    main: string;
  }[];
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  coord: {
    lon: number;
    lat: number;
  };
};

//  OpenWeatherMap API key
const API_KEY: string = "52a1d656c075c9821ee89d97cd2de7a4";

// Used to cancel previous fetch requests if a new one is triggered
let controller: AbortController | null = null;

export async function fetchCityWeather(
  CITY_NAME: string
): Promise<WeatherData | null> {
  try {
    // Cancel the previous request if it's still pending
    if (controller) {
      controller.abort();
    }

    controller = new AbortController();
    const { signal } = controller;

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`,
      { signal }
    );

    if (!res.ok) {
      throw new Error("there is some thing wrong with fetching data");
    }

    const data: WeatherData = await res.json();

    return data;
  } catch (err: any) {
    if (err.name === "AbortError") {
      console.log("Request was aborted");
    } else {
      console.error(err.message);
      throw new Error("PLEASE WRITE CITY NAME CORRECTLY !!");
    }
    return null;
  }
}
