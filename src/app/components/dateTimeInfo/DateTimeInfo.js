import { format } from "date-fns";
import { ptBR } from "date-fns/locale/index.js";
import styles from "./DateTimeInfo.module.css";

const DateTimeInfo = () => {
  const currentDate = new Date();

  //formatar data com a biblioteca date-fns
  const formatDate = format(currentDate, "dd ',' MMMM 'de' yyyy", {
    locale: ptBR,
  });

  const formatTime = format(currentDate, "EEEE, HH:mm", {
    locale: ptBR,
  });

  const dayOrNight = () => {
    const currentTime = format(currentDate, "HH:mm");
    if (currentTime >= "06:00" && currentTime < "18:00") {
      return "Dia";
    } else {
      return "Noite";
    }
  };

  return (
    <div className={styles.date}>
      <p className={styles.dmy}>{formatDate}</p>
      <p className={styles.dayHour}>{formatTime}</p>
      <p>{dayOrNight()}</p>
    </div>
  );
};

export default DateTimeInfo;
