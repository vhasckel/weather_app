"use client";
import Image from "next/image";
import styles from "./WeatherInfo.module.css";
import { useEffect, useState } from "react";

const WeatherInfo = ({ weatherData }) => {
  const getImageName = (description) => {
    switch (description.toLowerCase()) {
      case "céu limpo":
        return "sun.svg";
      case "névoa":
        return "mist.svg";
      case "nublado":
        return "cloudy.svg";
      case "nuvens dispersas":
        return "cloudy.svg";
      case "chuva":
        return "rain.svg";
      case "nevando":
        return "snow.svg";
      case "neve":
        return "snow.svg";
      case "trovoada com chuva fraca":
        return "rain.svg";
      default:
        return "default.svg"; // Imagem padrão para descrições desconhecidas
    }
  };

  const imageName = weatherData
    ? getImageName(weatherData.weather[0].description)
    : "default.png";

  return (
    <div className={styles.degrees}>
      {weatherData ? (
        <>
          {/* Verifica se weatherData.weather está definido antes de acessá-lo */}
          {weatherData.weather && weatherData.weather[0] ? (
            <>
              <Image
                src={`/${imageName}`}
                alt={weatherData.weather[0].description}
                width={204}
                height={204}
              />
              <div className={styles.degreesInfo}>
                <div className={styles.box}>
                  <p>{Math.round(weatherData.main.temp)}</p>
                  <span>ºC</span>
                </div>
                <p>{weatherData.weather[0].description}</p>
              </div>
            </>
          ) : (
            <p>Dados de clima indisponíveis</p>
          )}
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default WeatherInfo;
