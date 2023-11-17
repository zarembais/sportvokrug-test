export const calculateDates = (start, end) => {
  const s = new Date(start);
  const e = new Date(end);

  let r = "";

  const addZero = (n) => (n < 10) ? "0" + n : n;

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
      r = `${s.getDate()}.${addZero(s.getMonth() + 1)}-${e.getDate()}.${
        addZero(e.getMonth() + 1)
      }${r}`;
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
