"use client";
import { useEffect, useState } from "react";
import styles from "./WeatherCard.module.css";

const WeatherCard = ({ weatherData, label }) => {
  const dataMappings = {
    Vento: {
      property: "wind",
      subProperty: "speed",
      unit: " km/h",
    },
    Umidade: {
      property: "main",
      subProperty: "humidity",
      unit: "%",
    },
    "Sensação Térmica": {
      property: "main",
      subProperty: "feels_like",
      unit: "ºC",
    },
    Máxima: {
      property: "main",
      subProperty: "temp_max",
      unit: "ºC",
    },
    Mínima: {
      property: "main",
      subProperty: "temp_min",
      unit: "ºC",
    },
    Nuvens: {
      property: "clouds",
      subProperty: "all",
      unit: "%",
    },
    Pressão: {
      property: "main",
      subProperty: "pressure",
      unit: " hPa",
    },
  };

  const dataMapping = dataMappings[label];
  let infoText = "Indisponível";

  if (dataMapping) {
    const { property, subProperty, unit } = dataMapping;

    if (property && weatherData && weatherData[property]) {
      const value = subProperty
        ? weatherData[property][subProperty]
        : weatherData[property];
      infoText = `${value}${unit || ""}`;
    }
  }

  return (
    <div className={styles.card}>
      <p className={styles.infoOne}>{label}</p>
      <p className={styles.infoTwo}>{infoText}</p>
    </div>
  );
};

export default WeatherCard;
