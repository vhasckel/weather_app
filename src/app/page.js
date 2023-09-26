"use client";
import styles from "./page.module.css";
import InputForm from "./components/inputForm/InputForm";
import WeatherInfo from "./components/weatherInfo/WeatherInfo";
import DateTimeInfo from "./components/dateTimeInfo/DateTimeInfo";
import LocationInfo from "./components/locationInfo/LocationInfo";
import WeatherCard from "./components/weatherCard/WeatherCard";
import { useEffect, useState } from "react";
import { API_KEY } from "../../key";

export default function Home() {
  const [city, setCity] = useState("Florianópolis");
  const [weatherData, setWeatherData] = useState(null);

  const handleCityChange = async (newCity) => {
    setCity(newCity);
  };

  useEffect(() => {
    const getWeather = async (city) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=pt_br`
        );
        const data = await response.json();
        setWeatherData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (city) {
      getWeather(city);
    }
  }, [city]);

  const labels = [
    "Vento",
    "Umidade",
    "Sensação Térmica",
    "Máxima",
    "Mínima",
    "Nuvens",
    "Pressão",
  ];

  return (
    <main className={styles.main}>
      <section className={styles.left}>
        <InputForm onCityChange={handleCityChange} />
        <WeatherInfo weatherData={weatherData} />
        <div className={styles.line}></div>
        <DateTimeInfo />
        <LocationInfo weatherData={weatherData} />
      </section>

      <section className={styles.right}>
        <div className={styles.title}>
          <h1>Hoje</h1>
        </div>
        <div className={styles.cards}>
          {labels.map((label) => (
            <WeatherCard key={label} label={label} weatherData={weatherData} />
          ))}
        </div>
      </section>
    </main>
  );
}
