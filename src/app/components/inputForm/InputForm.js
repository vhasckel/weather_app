"use client";
import Image from "next/image";
import styles from "./InputForm.module.css";
import { useState } from "react";

const InputForm = ({ onCityChange }) => {
  const [search, setSearch] = useState("");

  const handleInputValue = (event) => {
    const typedText = event.target.value;
    setSearch(typedText);
  };

  //essa função é chamada quando o usuário faz uma busca
  const handleSearch = () => {
    if (search) {
      onCityChange(search);
      setSearch("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className={styles.input}>
      <form className={styles.inputWrapper}>
        <input
          placeholder="Sua localização"
          value={search}
          onChange={handleInputValue}
          onKeyDown={handleKeyPress}
        ></input>
        <Image
          onClick={handleSearch}
          src="/search-icon.svg"
          width={24}
          height={24}
          alt="search icon"
        />
      </form>
    </div>
  );
};

export default InputForm;
