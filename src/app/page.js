"use client";
import styles from "./page.module.css";
import InputForm from "./components/inputForm/InputForm";
import WeatherInfo from "./components/weatherInfo/WeatherInfo";
import DateTimeInfo from "./components/dateTimeInfo/DateTimeInfo";
import LocationInfo from "./components/locationInfo/LocationInfo";
import WeatherCard from "./components/weatherCard/WeatherCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [city, setCity] = useState("Florianópolis");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleCityChange = async (newCity) => {
    setCity(newCity);
  };

  useEffect(() => {
    const getWeather = async (city) => {
      try {
        const openWeatherAPIKey = "3c31ccf9d661c27eb017a5b6ca5bab14";
        console.log(openWeatherAPIKey);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${openWeatherAPIKey}&lang=pt_br`
        );

        if (!response.ok) {
          throw new Error("Não foi possível obter dados.");
        }

        const data = await response.json();
        setWeatherData(data);
        setError(null); //limpa erros anteriores
        console.log(data.weather[0].icon);
      } catch (error) {
        setError("Ocorreu um erro ao buscar dados.");
        console.log(error);
      }
    };

    //se city não for uma tring vazia, chamamos a função getWeather
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

        {error && <p className={styles.error}>{error}</p>}

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
