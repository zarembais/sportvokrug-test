export const addZero = (n) => (n < 10 ? "0" + n : n);

export const combineDates = (start, end) => {
  const s = new Date(start);
  const e = new Date(end);
  let r = "";

  // ДД-ДД.ММ.ГГГГ
  // ДД.ММ-ДД.ММ.ГГГГ;
  // ДД.ММ.ГГГГ-ДД.ММ.ГГГГ;

  if (s.getFullYear() === e.getFullYear()) {
    r += `.${s.getFullYear()}`;
    if (s.getMonth() === e.getMonth()) {
      r = `.${addZero(s.getMonth() + 1)}${r}`;
      if (s.getDate() === e.getDate()) {
        r = s.getDate() + r;
      } else {
        r = s.getDate() + "-" + e.getDate() + r;
      }
    } else {
      r = `${s.getDate()}.${addZero(s.getMonth() + 1)}-${e.getDate()}.${addZero(
        e.getMonth() + 1
      )}${r}`;
    }
  } else {
    r = `${s.getDate()}.${addZero(
      s.getMonth() + 1
    )}.${s.getFullYear()}-${e.getDate()}.${addZero(
      e.getMonth() + 1
    )}.${e.getFullYear()}`;
  }
  return r;
};

export const calculateRemainTime = (date, now) => {
  const diff = Math.abs(new Date(date) - new Date(now));
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)) % 7,
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

export const formatTime = (time) => {
  return `${time.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
};

export const formatDate = (time) => {
  return `${time.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
  })}`;
};

export const formatWeekday = (time) => {
  return `${time.toLocaleDateString("ru-RU", { weekday: "long" })}`;
};

export const getRussianWordEnding = (number, word) => {
  const cases = [2, 0, 1, 1, 1, 2];
  const dict = {
    sec: ["секунда", "секунды", "секунд"],
    min: ["минута", "минуты", "минут"],
    hour: ["час", "часа", "часов"],
    day: ["день", "дня", "дней"],
  };
  const words = dict[word];
  return words[
    number % 100 > 4 && number % 100 < 20 ? 2 : cases[Math.min(number % 10, 5)]
  ];
};
