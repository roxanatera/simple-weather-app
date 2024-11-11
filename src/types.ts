export interface WeatherData {
    name: string;
    main: {
      temp: number;
      humidity: number;
    };
    wind: {
      speed: number;
    };
  }
  
  export interface ForecastItem {
    dt_txt: string;
    main: {
      temp: number;
    };
  }
  
  export interface ForecastData {
    list: ForecastItem[];
  }
  