"use client";
import { useEffect, useState } from "react";
import styles from "./LocationInfo.module.css";

const LocationInfo = ({ weatherData }) => {
  return (
    <div className={styles.local}>
      <h5>{weatherData ? weatherData.name : "Indisponível"}</h5>
    </div>
  );
};

export default LocationInfo;
