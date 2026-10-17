import type { DayWeather, WeatherForecast } from "../../api/types";
import { CloudIcon, CloudLightningIcon, CloudRainIcon, CloudSnowIcon, CloudSunIcon, SunIcon } from "../icons/Icons";

export function weatherForDay(forecast: WeatherForecast, day: Date): DayWeather | undefined {
    const dayString = new Intl.DateTimeFormat("en-CA", { timeZone: forecast.timezone}).format(day);
    const index = forecast.daily.time.indexOf(dayString);
    if (index === -1) return undefined;

    return {
        code: forecast.daily.weather_code[index],
        high: forecast.daily.temperature_2m_max[index],
        low: forecast.daily.temperature_2m_min[index],
        rainChance: forecast.daily.precipitation_probability_max[index]
    };
}

export function weatherIconLookup(weatherCode: number) {
    if (weatherCode === 0) return {label: "Sunny", Icon: SunIcon}
    if (weatherCode <= 2) return {label: "Partly Cloudy", Icon: CloudSunIcon}
    if (weatherCode <= 48) return {label: "Overcast", Icon: CloudIcon}
    if (weatherCode <= 67) return {label: "Rain", Icon: CloudRainIcon}
    if (weatherCode <= 77) return {label: "Snow", Icon: CloudSnowIcon}
    if (weatherCode <= 82) return {label: "Rain", Icon: CloudRainIcon}
    if (weatherCode <= 86) return {label: "Snow", Icon: CloudSnowIcon}
    return {label: "Storm", Icon: CloudLightningIcon}
}